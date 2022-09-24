import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// remember by default, anything added to the url is added behind /movies (localhost3000)

// GET /flights/new 
router.get('/new', flightsCtrl.new)

// POST / flights
router.post('/', flightsCtrl.create)

// GET /index
router.get('/', flightsCtrl.index)

// GET /show
router.get('/:id', flightsCtrl.show)

// DELETE /flights/:id
router.delete('/:id', flightsCtrl.delete)
export {
  router
}
