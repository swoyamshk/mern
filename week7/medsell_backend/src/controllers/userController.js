//controllers to save

const User = require("../models/userModel");

const createUser = async(req, res)=>{

    const data = req.body;
    // const name = data.name;
    // const age = data.age;
    // const role = data.role

    const {name, age, role, address} = req.body;
    const addUser = new User({
        name :name,
        age: age,
        role: role,
        address: address,
    });

    try{
        const response = await addUser.save();
        if(response){
            res.status(201).json({message:"user created sucessfully", response} )
        }
    }
    catch(err){
        res.status(500).json({message:"internal server error", err});
    }

    // const response =await addUser.save();
}

module.exports = createUser;