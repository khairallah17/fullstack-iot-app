// Importation du module Mongoose
const mongoose = require("mongoose");

// Définition d'un schéma de produit
const userSchema = new mongoose.Schema({
  lName: String,
  fName: String,
  email: String,
  password: String,
});

// Création d'un modèle Mongoose basé sur le schéma
const User = mongoose.model("User", userSchema);

// Exportation du modèle Product pour une utilisation ultérieure
module.exports = User;
