// Importation du module Mongoose
const mongoose = require("mongoose");

// Définition d'un schéma de produit
const categorySchema = new mongoose.Schema({
  name: String
});

// Création d'un modèle Mongoose basé sur le schéma
const Category = mongoose.model("Category", categorySchema);

// Exportation du modèle Product pour une utilisation ultérieure
module.exports = Category;
