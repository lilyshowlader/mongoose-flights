import { Flight } from "../models/flight.js"
// above we imported the model from the model directory 

// below is the function that handles when a user wants to view all flights
function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights'
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/flights')
  })
}


// below is the function that handles when a user wants to add a NEW flight
// this function is fired off when the user clicks on the "add new flight" anchor tag and hits the get/new route
function newFlight (req, res) {
  res.render("flights/new", {
    title: 'Add Flight'
  })
}


// below is the function that handles the submission of the form that creates a new flight
function create (req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing

  // replace and split if it's not an empty string
  if (req.body.cast) {
		// remove whitespace next to commas
    req.body.cast = req.body.cast.split(', ')
  }
  Flight.create(req.body)
  .then(flight => {
    res.redirect(`/flights`)
  })
  .catch(err => {
    res.redirect('/flights')
  })
}

// below is the function that allows a user to see the details of the flight
function show(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/show', { 
      title: 'Flight Detail', 
      flight: flight,
    })    
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

// below is the function that allows a user to delete a flight
function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/flights")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}


function edit (req, res) {
  console.log("edit is working")
  Flight.findById(req.params.id)
  .then (flight => {
    res.render('flights/edit', {
      flight : flight,
      title: "Edit Flight"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function update (req, res) {
  console.log("update is working")
  Flight.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function createTicket (req, res) {
  console.log("hello I am working")
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function deleteTicket (req, res) {
  console.log("delete ticket is working")
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.remove({id:req.params.ticketId})
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

//when you are trying to remeove a subdoc, using .remove, you can use parameters to remove a specific ticket
// use save method, whenever you are updating something that has already been created. 



export {
  index,
  newFlight as new, 
  create,
  show,
  deleteFlight as delete,
  edit,
  update,
  createTicket,
  deleteTicket 
}