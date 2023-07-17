import * as openTripClientService from '../services/openTripClientService'
import * as emissionsService from '../services/emissionsService'

/**
 * Get a route plan and ammend CO2 emissions
 * @param {import("express").Request} req the request object
 * @param {import("express").Response} res the response object
 */
export async function getRoutePlan(req, res) {
  const { from, to, date, time, mode = 'TRANSIT', arriveBy = false, wheelchair = false } = req.query

  const response = await openTripClientService
    .getPlan(from, to, date, time, mode, arriveBy, wheelchair)

  const data = emissionsService.ammendResponse(response.data)

  res.json(data)
}