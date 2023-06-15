// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

// schema
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Monica', 'Joey', 'Chandler', 'Phoebe', 'Ross', 'Rachel']
    }, 
    startDate: {
        type: Date,
        required: true
    },
    bio: String
})


// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker
