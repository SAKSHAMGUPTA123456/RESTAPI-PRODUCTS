const express=require('express')
const router=express.Router()
const authtaking=require('../controller/products')
router.post('/',authtaking.allproducts)
router.get('/products',authtaking.productlist)
module.exports=router
