// import modules

import express from 'express'
import * as heroDB from './data/hero-db.js'
// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')


// Mount Middleware (app.use)
app.use(express.static('/public'));


// Mount routes
app.get('/', function(req, res) {
    res.send('<h1>hello, friend</h1>')
  })

app.get('/home', function(req, res) {
    res.render('home')
  })

app.get('/heroes', function(req, res) {
    heroDB.find({}, function (error, heroes) {
        res.render('heroes/index', {
            heroes,
            error
        })
    })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})