const mongoose=require('mongoose')
const uri=process.env.MONGO
const congodb=async(req,res,next)=>{
try{
await mongoose.connect(uri)
console.log('database connection successfully')
}catch(error){
    console.log(error)
}
}

module.exports=congodb