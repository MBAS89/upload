require('dotenv').config();
const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { success, error } = require('consola')
const mongoose = require('mongoose');

//Routes
const imagesRoutes = require('./routes/images');
const userRoutes = require('./routes/user')

const app = express()

app.use(cors())
app.use(bodyParser.json())

//Inject Routes
app.use('/api/images', imagesRoutes)
app.use('/user', userRoutes)

app.use(express.static(path.join(__dirname, './puplic')))


mongoose.connect('mongodb://localhost:27017/upload', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(process.env.PORT, ()=> success({ badge: true, message: `Server started on port ${process.env.PORT}`}))) 
    .catch((error)=> console.log(error.message)) 


/*const startApp = () => {
    app.listen(process.env.PORT, () => success({ badge: true, message: `Server started on port ${process.env.PORT}`}))
}

startApp()*/
