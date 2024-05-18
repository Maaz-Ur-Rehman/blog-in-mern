const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config()
mongoose.connect( process.env.MONGO_URL)
.then(()=>{
    console.log('MongoDb is Connected')
})
.catch((err)=>{
    console.log(err)
})

const port=6000
app.listen(port,()=>{
    console.log(`Backend Running On Port ${port}`)
})

