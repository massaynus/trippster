import * as emissionsRepository from "../repositories/emissionsRepository"

export const ammendEmission = (leg) => Object.assign({
  co2: emissionsRepository.getEmission(leg.mode)
}, leg)

export const ammendEmissions = (legs) => legs.map(leg => ammendEmission(leg))

export const ammendResponse = (response) => {
  const resCopy = JSON.parse(JSON.stringify(response))
  const itineraries = resCopy.plan.itineraries

  for (const itinerarie of itineraries)
    itinerarie.legs = ammendEmissions(itinerarie.legs)

  return resCopy
}
