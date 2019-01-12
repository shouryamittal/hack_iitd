// ====== connection.js for connection setup ===== //

const mongoose = require('mongoose')
mongooose.connect('mongoose://localhost/hack_it');

const schema = {
    hospitals: mongoose.model('hospitals', new mongoose({
        hospital_name: String,
        latitude : Number,
        longitude: Number,
        beds: Number,
        location : String,
        address : String,
        state: String,
        pincode : Number,
        telephone : Number,
        ambulance_ph_no : Number,
        bloodbank_ph_no : Number,
        website : String,
        specialities : [String],
        no_of_doctors : Number,
        no_of_private_wards : Number,
        no_of_beds_eco_weak: Number,
    })),

    users:mongoose.model('users',new mongoose({
        name:String,
        location:String,
        phone_no:Number,
        email:String
    }))
}

module.exports = schema;