import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// remember by default, anything added to the url is added behind /movies (localhost3000)
// GET /flights (index/localhost 3000)
router.get('/', flightsCtrl.index)

// GET /movies/new 
router.get('/new', flightsCtrl.new)

export {
  router
}
