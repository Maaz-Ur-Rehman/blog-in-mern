const express=require('express')
const app=express()


const port=6000
app.listen(port,()=>{
    console.log(`Backend Running On Port ${port}`)
})

