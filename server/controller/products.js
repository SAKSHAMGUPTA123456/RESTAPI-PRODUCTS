const Product=require('../product.json')
const User=require('../productschemamodel')
const allproducts=async(req,res)=>{
// res.status(200).json({mssg:"all products"})
const fg=await User.create(Product)
res.status(200).json({mssg:"created api"})
}
const productlist=async(req,res)=>{
  const {price,name,company,sort,rating,min,max}=req.query
  let fg={}
  if(name){
    fg.name={$regex:name,$options:"i"}
  }
  if(company){
    fg.company={$regex:company,$options:"i"}
  }
  if(rating){
    fg.rating=rating
  }if(price){
    fg.price=price
  }
  console.log(min,max)
  if(min&&max){
    fg.price={$gte:Number(min),$lte:Number(max)}
  }
let fgs= User.find(fg)
if(sort){
  fgs=fgs.sort(sort)
}
const apidata=await fgs
res.status(200).json({mssg:apidata})
}
  
module.exports={allproducts,productlist}