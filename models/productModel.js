const Product = require('../schemas/productShema')

// POST

exports.addProduct = (req, res) => {
   const { name, description, price, imageURL } = req.body

   if(!name || !description || !price || !imageURL){
    return res.status(400).json({
        message: "all fields are required"
   })
   }
   Product.create({ name, description, price, imageURL })
   .then(data => res.status(201).json(data))
   .catch(() => res.status(500).json({ message: "Something went wrong" })) 
}

// GET ALL PRODUCTS

exports.getProducts = (req, res) => {
    Product.find()
    // .populate('comment')
    // .populate('status')
    // .exec()
    .then(data => res.status(200).json(data))
    .catch(() => res.status(500).json({ message: "Something went wrong getting all the errands" })) 
}

// GET PRODUCT BY ID

exports.getOneProduct = (req, res) =>{
    id = req.params.id
    Product.findById(id)
    .then(data => res.status(200).json(data))
    .catch(() => res.status(500).json({ message: "Something went wrong getting specific the errand" })) 
}


// CHANGE PRODUCT

exports.changeProduct = (req, res) =>{
    const { name, description, price, imageURL } = req.body
    id = req.params.id

   if(!name || !description || !price || !imageURL){
    return res.status(400).json({
        message: "all fields are required"
   })
   }
   
    Product.findByIdAndUpdate(id, {name, description, price, imageURL}, { new: true })
    .then(data => res.status(200).json(data))
    .catch(() => res.status(500).json({ message: "Something went wrong getting specific the errand" })) 
}

// DELETE 

exports.deleteProduct = (req, res) =>{
    id = req.params.id
    Product.findByIdAndDelete(id)
    .then(data => res.status(200).json(data))
    .catch(() => res.status(500).json({ message: "Something went wrong getting specific the errand" })) 
}