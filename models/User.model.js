const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  cars: {
    type: [Schema.Types.ObjectId],
    ref: 'Car'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
