const express = require('express')
const app = express()

//configuration 
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

// BREADS
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//ROUTES
app.get('/', (req, res)=>{
    res.send('Welcome to the Bread App!')
})

app.listen(PORT, ()=>{
    console.log('listening on port:', PORT)
})

