const mongoose = require('mongoose');

// Define the user schema
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    cans: {
        type: Number,
        required: true,
    },
    total : {
        type: Number
    }
}, {
    timestamps: true // This adds the `createdAt` and `updatedAt` fields
});

// Create and export the model
module.exports = mongoose.model('User', UserSchema);
