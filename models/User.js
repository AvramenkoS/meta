const {Schema, model, Types} = require('mongoose')

const user = new Schema({
    email: {
        type: String,
        required: true,
        unique: true // уникальность
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    links: [{
        type: Types.ObjectId, // id mongodb
        ref: 'Link' // привязка к коллекции
    }]
})

module.exports = model('User', user)