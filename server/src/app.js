const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express() // this creates an "express server", but what exactly is that? 
app.use(morgan('combined')) // use the long generator called morgan and then this is something that if you look at the morgan docs it says pass a string of combined to have it print out it logs in a certain way (??)
app.use(bodyParser.json()) // allows bodyParser to process json in an easier way (?)
app.use(cors()) // you need cors if you want a server to be hosted on a different domain and you want any clients from around the world to hit your server and it's kind of a security risk to have it enabled so just if you do have an enable make sure you have a good you know security covering your application

// app.get('/status', (req,res) => {
//     res.send({
//         message: 'hello world'
//     })
// })

app.post('/register', (req,res) => {
    res.send({
        message: `Hello ${req.body.email}, your user was registered`
    })
})

app.listen(process.env.PORT || 8081) // this enables a localhost:8081