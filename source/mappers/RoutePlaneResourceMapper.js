export function map(input) {

  const from = {
    coordinates: [input.plan.from.lon, input.plan.from.lat]
  }

  const to = {
    coordinates: [input.plan.to.lon, input.plan.to.lat]
  }

  const itineraries = input.plan.itineraries.map(it => {
    const co2Sum = it.legs.reduce((acc, curr) => acc + curr.co2, 0)

    const itinerary = {
      "co2": co2Sum,
      "distance": it['distance'],
      "startTime": it['startTime'],
      "endTime": it['endTime'],
      "duration": it['duration'],
    }

    itinerary['legs'] = it['legs'].map(leg => ({
      "mode": leg['mode'],
      "distance": leg['distance'],
      "co2": leg['co2']
    }))

    return itinerary
  })

  const output = { plan: { from, to, itineraries } }

  return output
}

export default { map }