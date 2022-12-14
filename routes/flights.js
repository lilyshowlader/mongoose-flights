import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// remember by default, anything added to the url is added behind /movies (localhost3000)


// GET /index
router.get('/', flightsCtrl.index)

// GET /flights/new 
router.get('/new', flightsCtrl.new)

// GET /show
router.get('/:id', flightsCtrl.show)

// GET /flights/:id/edit
router.get("/:id/edit", flightsCtrl.edit)

// POST / flights
router.post('/', flightsCtrl.create)

// POST /flights/:id/tickets
router.post('/:id/tickets', flightsCtrl.createTicket)

// POST /flights/:id/meals
router.post('/:id/meals', flightsCtrl.newMeal);

// DELETE /flights/:id
router.delete('/:id', flightsCtrl.delete)

// DELETE /flights/:id/tickets/:ticketId
router.delete('/:id/tickets/:ticketId', flightsCtrl.deleteTicket)

// PUT /flights/:id
router.put("/:id", flightsCtrl.update)

export {
  router
}
