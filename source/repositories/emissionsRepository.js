import emissions from "../lib/emissions.json"

/**
 * get all the multipliers configured for emissions
 * @returns {{[string]: [number]}} The emissions configuration
 */
export function getEmissions() {
  return emissions
}

/**
 * get the wanted emission multiplier for supplied transit mode
 * @param {string} transitMode the wanted transit mode
 * @returns {number} the multiplier
 */
export function getEmission(transitMode) {
  return emissions[transitMode]
}