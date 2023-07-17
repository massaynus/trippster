import express from 'express'
import cors from 'cors'
import router_api_v1 from './routes/api_V1'


const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/plan', router_api_v1)

export default app
