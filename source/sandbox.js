import * as emissionsService from './services/emissionsService'
import * as openTripClientService from './services/openTripClientService'
import app from './server'

export async function main(event) {
  // const { from, to, date, time, mode = 'TRANSIT', arriveBy = false, wheelchair = false } = event

  const response = await openTripClientService
    // .getPlan(from, to, date, time, mode, arriveBy, wheelchair)
    .getPlan('60.148156622692035,24.987887975719225', '60.19461994799159,24.870836734771732', '07-31-2023', '8:40am', 'TRANSIT', false, false)


  return JSON.stringify(
    emissionsService.ammendResponse(response.data),
    null,
    2
  )
}

main().then(console.log).catch(console.log)
// app.listen(3000, () => console.log(`Server in "DEV" mode & listening on 3000!`));

