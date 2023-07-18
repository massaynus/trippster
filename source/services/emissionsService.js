import * as emissionsRepository from "../repositories/emissionsRepository"

/**
 * add co2 to ApiLeg
 * @param {object} legs ApiLeg is a part of the trip, can be either a car or walk or something else
 * @returns same object with co2 footprint added
 */
export const ammendEmission = (leg) => Object.assign({
  co2: emissionsRepository.getEmission(leg.mode)
}, leg)

/**
 * add co2 to ApiLegs
 * @param {object[]} legs array of ApiLeg are parts of the trip, can be either a car or walk or something else
 * @returns same objects with co2 footprint added
 */
export const ammendEmissions = (legs) => legs.map(leg => ammendEmission(leg))

/**
 * add co2 emissions to the PlannerResource
 * @param {object} response takes in the PlannerResource
 * @returns {object} a new object with same data and co2 emissions added
 */
export const ammendResponse = (response) => {

  // this is where I could've used immer but adding a package for a single use didn't feel right
  // copying the object will help us avoid mutating the passed input at the cost of using a bit more memory and processing power
  const resCopy = structuredClone(response)
  const itineraries = resCopy.plan.itineraries

  // next up is just basic processing object by object
  for (const itinerarie of itineraries)
    itinerarie.legs = ammendEmissions(itinerarie.legs)

  return resCopy
}
