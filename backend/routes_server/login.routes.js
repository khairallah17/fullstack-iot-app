// Importation du module Express
const express = require("express");

// Importation du contrôleur des produits
const loginController = require("../controllers_server/login.controllers");

// Création d'un routeur Express
const router = express.Router();

// Route GET "/products" pour récupérer tous les produits
router.route("/signUp").post(loginController.signUp);
router.route("/login").post(loginController.login);


module.exports = router;
