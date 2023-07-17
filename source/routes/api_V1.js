import express from 'express'
import { getRoutePlan } from '../controllers/PlanController'

const router = express.Router()

router.get('/', getRoutePlan)

export default router