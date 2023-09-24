const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()


// setup access to the env file 
require('dotenv').config()

// MIDDLEWARE
// this will parse the data created to req.body obj
// this middleware is used for parsing incoming data from HTML 
// forms submitted via POST requests, and it is designed to 
// work with form data that is url encoded
app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

const PORT = process.env.PORT || 3000

const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI)
const db = mongoose.connection


// status message to check mongo connection
db.on('error', (err) => { console.log('ERROR: ' , err) })
db.on('connected', () => { console.log('mongo connected') })
db.on('disconnected', () => { console.log('mongo disconnected')})


// import controllers
const todoController = require('./controllers/todos.js')
// use controller with app use 
// when you see the URL that starts with /todos 
// use this router
app.use('/todos', todoController)

// Add a route handler for the root URL '/
app.get('/', (req, res) => {
    res.redirect('/todos') // Redirect to the list of todos
})

//sets a session property and then redirects the user to a specified route 
app.get('/any', (req, res) => {
    req.session.anyProperty = 'something'
    res.redirect('/todos')
})


//
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
