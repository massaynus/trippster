import emissions from "../lib/emissions.json"

export function getEmissions() {
  return emissions
}

export function getEmission(transitMode) {
  return emissions[transitMode]
}