const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config()
const router=require('./routes/todoroutes')


const app=express()

// in-bulit middleWares.
app.use(express.json())
app.use(cors('*'))


const port=process.env.port || 5000;

mongoose.connect(process.env.MONGODBURL)
.then((x)=>console.log('connected to database'))
.catch((x)=>console.log('Error with database connection'))



app.use('/',router)
app.listen(port,()=>{
    console.log('server is running fine')
})