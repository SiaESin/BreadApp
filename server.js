const express = require('express')
const app = express()

//configuration 
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

//ROUTES
app.get('/', (req, res)=>{
    res.send('Welcome to the Bread App!')
})

// BREADS
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

app.listen(PORT, ()=>{
    console.log('listening on port:', PORT)
})

