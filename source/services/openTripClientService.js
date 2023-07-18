import axios, { Axios } from "axios";
import { API_KEY, API_URL } from "../lib/config";

const client = axios.create({
  baseURL: API_URL,
  headers: {
    'X-API-KEY': API_KEY
  }
})

/**
 * make a request to OpenTripPlanner and retrieve the TripPlannerResponse
 * @param {string} from the starting coordinates
 * @param {string} to the arrival coordinates
 * @param {string} date the starting or arrival date of the trip
 * @param {string} time the starting or arrival time of the trip
 * @param {"WALK" | "TRANSIT" | "BICYCLE" | "BICYCLE_RENT" | "BICYCLE_PARK" | "CAR" | "CAR_PARK" | "TRAM" | "SUBWAY" | "RAIL" | "BUS" | "CABLE_CAR" | "FERRY" | "GONDOLA" | "FUNICULAR" | "AIRPLANE"} mode the transit mode
 * @param {boolean} arriveBy whether the trip should depart or arrive at the specified date and time.
 * @param {boolean} wheelchair whether the trip must be wheelchair accessible
 * @returns TripPlannerResponse
 */
export async function getPlan(from, to, date, time, mode, arriveBy, wheelchair) {
  // the API response must be typed but we are using JS anyways so it doesn't make much sense

  const searchParams = new URLSearchParams()

  searchParams.set('fromPlace', from)
  searchParams.set('toPlace', to)
  searchParams.set('date', date)
  searchParams.set('time', time)
  searchParams.set('mode', mode)
  searchParams.set('arriveBy', arriveBy)
  searchParams.set('wheelchair', wheelchair)
  searchParams.set('showIntermediateStops', true)
  searchParams.set('locale', 'en')

  return client.get(`/routers/default/plan?${searchParams.toString()}`)
}
