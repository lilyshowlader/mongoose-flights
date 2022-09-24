import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const flightSchema =({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date
}, {
  timestamps: true
})

// Compile the schema into a model and export it
const Flight = mongoose.model('Flight', movieSchema)

export {
  Flight
}