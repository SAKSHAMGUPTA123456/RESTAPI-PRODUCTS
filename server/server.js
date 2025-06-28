require('dotenv').config()
const express=require('express')
const app=express()
const cors=require('cors')
const router=require('./router/router')
const congodb=require('./database/db')
app.use(cors())
app.use('/m',router)
app.get('/',(req,res)=>{
res.send('hello server page')
})


congodb().then(()=>{
const port=1000
app.listen(port,()=>{
console.log('hello')
})

})
