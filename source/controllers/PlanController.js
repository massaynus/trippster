import * as openTripClientService from '../services/openTripClientService'
import * as emissionsService from '../services/emissionsService'
import RoutePlaneResourceMapper from '../mappers/RoutePlaneResourceMapper'

/**
 * Get a route plan and ammend CO2 emissions
 * @param {import("express").Request} req the request object
 * @param {import("express").Response} res the response object
 */
export async function getRoutePlan(req, res) {

  // retriece data from request params
  const { from, to, date, time, mode = 'TRANSIT', arriveBy = false, wheelchair = false } = req.query

  // get the plan from OpenTripAPI using the passed arguments
  const response = await openTripClientService
    .getPlan(from, to, date, time, mode, arriveBy, wheelchair)

  // ammend CO2 emissions to the itineraries
  const data = emissionsService.ammendResponse(response.data)

  // transform the object to fit the requested Schema
  const transformedData = RoutePlaneResourceMapper.map(data)

  res.json(transformedData)
}