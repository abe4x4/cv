const mongoose = require('mongoose')

const URL = 'mongodb+srv://abe4x4:money123@cluster0.c96zl.mongodb.net/cv_db?retryWrites=true&w=majority'

mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})
connection.on('error' , (error)=>{
    console.log(error)
})

