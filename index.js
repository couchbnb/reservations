const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
// const DB = require('./database/index.js');
const control = require('./database/control.js');
const parser = require('body-parser')
const dates = require('./database/dates.js');

app.use(parser.urlencoded({ extended: false }))
app.use(parser.json());
app.use('/', express.static(path.join(__dirname, '/public')))


app.listen(port, () => {
  console.log(`Reservation module listening at http://localhost:${port}`)
})




// routes

// get specific listing data
app.get('/api/listing', (req, res) => {
  // input is a listing ID,
  // console.log(req.body)
  control.getListing(req.body.listing_id, (err, data)=>{
    if (err) {
      console.log(err.name)
      res.sendStatus(500);
    } else {
      data.push(dates);
      res.status(200).send(data);
    }
  })
})

// get reservations for a specific listing
app.get('/api/reservations', (req, res) => {
  control.getReservations(req.body.listing_id, (err, data)=>{
    if (err) {
      console.log(err.name)
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }
  })
})


app.post('/api/reservations', (req, res) => {
  control.addReservation(req.body, (err, data)=>{
    if (err) {
      console.log(err.name)
      res.sendStatus(500);
    } else {
      res.status(201).send();
    }
  })
})

