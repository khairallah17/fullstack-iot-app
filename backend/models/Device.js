// Importation du module Mongoose
const mongoose = require("mongoose");

// Définition d'un schéma de produit
const deviceSchema = new mongoose.Schema({
  deviceName: String,
  deviceSeries: String,
  consumptionLimit: Number,
  image:String, 
  category:{
      type:mongoose.Types.ObjectId,
      ref:"Category"
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  }
});

// Création d'un modèle Mongoose basé sur le schéma
const Device = mongoose.model("Device", deviceSchema);

// Exportation du modèle Device pour une utilisation ultérieure
module.exports = Device;