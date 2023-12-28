const  {Product} = require("../models/Product.model")

const ProductController={
  getAll:async(req,res)=>{
    try{
        const products =await Product.find()
        res.status(200).send(products)
    }
    catch (error){
        res.status(404).send("an error occurted while getting products")
    }
  },
  getById: async (req,res) =>{
    try{
        const {id}=req.params
        const target = await Product.findById(id)
        res.status(200).send(target)
    }
    catch{
        res.status(404).send("an error occurted while getting products by id")
    }
  },
  add:async(req,res)=>{
    try{
        const { image,title,desc}= req.body
        const newProduct= new Product ({image,title,desc})
        await newProduct.save()
        res.status(201).send("add product")
    }
    catch (error){
        res.status(404).send("an error occurted while getting products add")

    }
  },
  edit:async(req,res)=>{
    try{
        const{id}=req.params
        const {title,desc,image} = req.body
        await Product.findByIdAndUpdate(id,{title,desc,image})
        res.status(203).send("edit product")
    }
    catch{
        res.status(404).send("an error occurted while getting products edit")
    }
  },
  delete:async(req,res)=>{
    try{
        const {id}=req.params
        await Product.findByIdAndDelete(id)
        res.status(204).send("delete product")
    }
    catch (error){
        res.status(404).send("an error occurted while getting products delete")
    }
  }
}
module.exports={ProductController}