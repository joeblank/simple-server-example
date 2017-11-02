// Require in dependecies
// Express is an application framework that will help us create a web server
const express = require('express');
// body-parser will parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const bodyParser = require('body-parser');
const cors = require('cors');
// require in the controller
const mainCtrl = require('./mainCtrl')

const app = express();
// top-level middleware
// will be used for every request
app.use(bodyParser.json());
app.use(cors());

// create endpoints w/ the following syntax:
// app.[HTTP method]([PATH], [CALLBACK FUNCTION])
// example: 
// app.delete('/api/birds/:3', function(req, res) {
    // logic, remove bird
    // res.status(200).send( [whatever you need to send] )
// })

// USE POSTMAN TO SEND A REQUEST TO THIS SERVER
// GET all birds
// REQUEST URL EXAMPLE: 'localhost:3001/api/birds'
app.get('/api/birds', mainCtrl.getBirds)
// GET a bird by id
// REQUEST URL EXAMPLE: 'localhost:3001/api/birds/2'
app.get('/api/birds/:id', mainCtrl.getBirdById)


// Save port in variable since you are referencing the port in 2 locations.
const port = 3001;
// Use the port variable above to tell your server which port to be listening for HTTP requests on.
app.listen(port, () => console.log(`Listening on port: ${port}`))

