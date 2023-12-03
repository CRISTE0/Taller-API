const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono:{
    type:Number,
    required: true,
  },
  documento:{
    type:Number,
    required: true,
  },
  estado:{
    type:Boolean,
    required: true,
  }
});

module.exports = mongoose.model("Clientes",userSchema);
