// Importation du module Express
const express = require("express");

// Importation du contrôleur des produits
const categoryController = require("../controllers_server/category.controllers");

// Création d'un routeur Express
const router = express.Router();

// Route GET "/products" pour récupérer tous les produits
router.route("/")
  .get(categoryController.getAllCategories)
  // Route POST "/products" pour ajouter un nouveau produit
  .post(categoryController.addCategory);

router.route("/:id")
  .get(categoryController.getCategoryById)
  .delete(categoryController.deleteCategoryById)
  .patch(categoryController.updateCategory);
// Exportation du routeur pour une utilisation ultérieure
module.exports = router;
