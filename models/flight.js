import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const flightSchema = new Schema ({
  airline: {
    type: String,
    required: true,
    enum: ['Delta', 'MeowMeowAir', 'Emirates', 'Etihad', 'JetBlue', 'MaebyAir', 'MayaAir', 'MiaAir']
  },
  airport: [String],
  flightNo: {
    type: Number, default: '', required: true
  },
  departs: {
    type: Date,
    required: true 
  },
}, {
  // timestamps: true
})

// Compile the schema into a model and export it
const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}
