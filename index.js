const express = require('express');
const path = require('path');
const app = express();
const port = 3005;
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
  // app.get('/listing', (req, res) => {
  //   var listing_id = req.query.listing_id;

  //   res.sendFiles(path.join(__dirname, '/public'))
  // })

// get specific listing data
app.get('/api/listing', (req, res) => {
  // input is a listing ID,
  // console.log(req.body)
  control.getListing(req.query.listing_id, (err, data)=>{
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
  console.log(req.query)
  control.getReservations(req.query.listing_id, (err, data)=>{
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

