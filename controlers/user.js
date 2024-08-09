import { User } from "../models/user.js";

export const getAllUser = async(req, res) => {
  const users = await User.find({})

  const category = req.query.category;
  console.log(category)


  res.json({
    success: true,
    users,
  })
}

export const register = async(req, res) => {
  const {name, email, password} = req.body;

  await User.create({
    name,  
    email, 
    password,
  })

  const users = await User.find({})

  res.status(201).cookie("kye", "value").json({
    success: true,
    message: "sent succesfully",

  })
}

export const getUserById  = async(req, res) => {
  
  const {id} = req.params;
 const userId  = await User.findById(id);

console.log(req.params)

 res.json({
  success: true,
  userId,
 })
}