// ====== connection.js for connection setup ===== //

const mongoose = require('mongoose')
mongooose.connect('mongoose://localhost/hack_it');

const schema = {
    hospitals: mongoose.model('hospitals', new mongoose({
        h_name: String,
        h_
    }))
}

module.exports = schema;