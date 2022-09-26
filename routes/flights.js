import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// remember by default, anything added to the url is added behind /movies (localhost3000)

// GET /flights/new 
router.get('/new', flightsCtrl.new)

// GET /index
router.get('/', flightsCtrl.index)

// GET /show
router.get('/:id', flightsCtrl.show)


// GET /movies/:id/edit
// localhost:3000/movies/:id/edit
router.get("/:id/edit", flightsCtrl.edit)

// POST / flights
router.post('/', flightsCtrl.create)

// DELETE /flights/:id
router.delete('/:id', flightsCtrl.delete)

// PUT /movies/:id
// localhost:3000/movies/:id
router.put("/:id", flightsCtrl.update)

export {
  router
}
