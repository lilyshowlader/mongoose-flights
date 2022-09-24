import { Flight } from "../models/flight.js"
// above we imported the model from the model directory 


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










export {
  index,
  newFlight as new 
}