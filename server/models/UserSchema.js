const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    email: String
})

module.exports = mongoose.model('users', UserSchema)