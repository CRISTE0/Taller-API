const express = require("express");

const userSchema = require("../models/cliente");
const { error } = require("console");

const router = express.Router();


// create user
router.post("/clientes",(req,res)=>{
    const user = userSchema(req.body);
    user
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});


// get all users
router.get("/clientes",(req,res)=>{
    userSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});


// get a user
router.get("/clientes/:id",(req,res)=>{
    const {id} = req.params;
    userSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});


// delete a user
router.delete("/clientes/:id",(req,res)=>{
    const {id} = req.params;
    userSchema
    .deleteOne({_id:id})
    .then((data)=> res.json(data))
    .catch((error)=>res.json({message:error}));
});

// update user
router.put("/clientes/:id",(req,res)=>{

    const {id} = req.params;
    const {nombre,direccion,telefono,documento} = req.body;
    userSchema
    .updateOne({_id:id},{$set:{nombre,direccion,telefono,documento}})
    .then((data)=> res.json(data))
    .catch((error) => res.json({message:error}))
});

module.exports=router;