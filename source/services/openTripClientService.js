import axios, { Axios } from "axios";
import { API_KEY, API_URL } from "../lib/config";

const client = axios.create({
  baseURL: API_URL,
  headers: {
    'X-API-KEY': API_KEY
  }
})

export async function getPlan(from, to, date, time, mode, arriveBy, wheelchair) {
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
