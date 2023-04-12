const Customer = require('../schemas/customerSchema')
const bcrypt = require('bcryptjs')
const auth = require('../authentication/auth') // js 9 2:38

exports.addCustomer = async (req, res) => {
    const { email, password } = req.body // Its not passwordHash JS 9, 1:41 
 
    if(!email || !password){  // Its not passwordHash JS 9, 1:41 
     return res.status(400).json({
         message: "all fields are required"
    })
    }
    
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt) // JS 9 1:45

    const _customer = new Customer({ email, passwordHash: hash }) // JS 9 1:47
    const customer = await _customer.save() // JS 9: 1:47 
    res.status(201).json(auth.generateToken(customer) ) // js 9 2:39
    // Customer.create({ email })
    // .then(data => res.status(201).json(data))
    // .catch(() => res.status(500).json({ message: "Something went wrong" })) 
 }

  // JS 9 2:44 LOGIN 

    exports.login = async (req, res) => {
        const { email, password } = req.body
        if(!email || !password){
        return res.status(400).json({
            message: 'you need to enter all the fields'
        })
    }
        
    const customer = await Customer.findOne({ email }) // jockes glömde JS9 2:58

        if(!customer) {
            return res.status(401).json({
                message: "invalid customer1"
            })
        }
        const result = await bcrypt.compare(password, customer.passwordHash) // JS 9 2:49

        if(!result) {
            return res.status(401).json({
                message: "invalid customer2"
            })
        }
        res.status(200).json(auth.generateToken(customer)) // js 9 2:52


    }
 
    // DELETE
    exports.deleteCustomer = async (req, res) => {
         const customer = await Customer.findOneAndDelete( {_id: req.params.id}) // JS 9 3:09:30
         if(!customer){
            return res.status(404).json({
            message: 'could not find that customer'
        })
    }
    res.status(204).json() // js 9 3:12
}


// UPDATE

exports.updateCustomer = async (req, res) => {
    // const customer = await Customer.findOneAndUpdate({ _id: req.params.id})
    const customer = await Customer.findOne({ _id: req.params.id })
    if(!customer){ // JS 9 3:31
        return res.status(404).json({
        message: 'could not find that customer'
    })
}
    customer.email = req.body.email  //JS 9 3:26
    const updatedCustomer = await Customer.save()// js 9 3:29
    res.status(200).json(updatedCustomer)
}