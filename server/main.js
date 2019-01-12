// =========== main.js for initial setup  ================= //

const express = require('express');
const bodyparser = require('body-parser');
const end_user_and_donor = require('./models/end_user_and_donor/end_user_and_donors');
const hospital_end  = require('./models/hospital_end/hospital_end');
const app = express()

app.use(function(req, res, next)
{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))

app.get('/', function(req, res){
    res.send("Response OK");
})

// === setup paths for different routes === //
//app.use(end_user_and_donor);
//app.use(hospital_end);

app.listen(8080, function(){
    console.log("Backend Server is running and up on port 8080")

});