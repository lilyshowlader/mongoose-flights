import mongoose from 'mongoose'


// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const ticketSchema = new Schema ({
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
  },
  price: { 
    type: Number,
    min: 0
 }
})

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
    default: function () {
      return new Date().setFullYear(new Date().getFullYear() + 1)
    },
    required: true 
  },
  tickets: [ticketSchema],
  meals: [{type:Schema.Types.ObjectId, ref: "Meal"}]
}, {
  // timestamps: true
})

// Compile the schema into a model and export it
const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}
