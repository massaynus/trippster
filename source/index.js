import * as emissionsService from './services/emissionsService'
import * as openTripClientService from './services/openTripClientService'

async function main() {
  const response = await openTripClientService
    .getPlan('60.148156622692035,24.987887975719225', '60.19461994799159,24.870836734771732', '07-31-2023', '8:40am', 'TRANSIT', false, false)

  console.log(
    JSON.stringify(
      emissionsService.ammendResponse(response.data),
      null,
      2
    )
  )
}

main().catch(console.log)
