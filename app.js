const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const userRoute = require("./routes/cliente")

// settings
const app = express();
const port = process.env.PORT || 3003;

// middlewares
app.use(express.json());
app.use("/api",userRoute);

// routes
app.get("/",(req,res)=>{
    res.send("Bienvenido to my API")
});

// mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log("Conectado a mongo atlas"))
.catch((error)=> console.error(error));


// server listening
app.listen(port,()=> console.log("serve listening",port));