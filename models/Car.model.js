const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    require: true
  },
  year: {
    type: Number,
    required: true
  },
  seller: {
    type: String
  }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
