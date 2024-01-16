// Importation du module Express
const express = require("express");
const path = require("path")

// Importation du contrôleur des devices
const deviceController = require("../controllers_server/devices.controllers");
const loginMiddelware = require("../middelwares/login.middelware");
const { getAllCategories } = require("../controllers_server/category.controllers")


// Création d'un routeur Express
const router = express.Router();
const multer=require("multer");

const storage = multer.diskStorage({
       destination: (req, file, cb) => {
        const parentDir = path.resolve(__dirname, "..")
        cb(null, parentDir + "/public/uploads")
       },
       filename: (req, file, cb) => {
         cb(null, file.originalname);
       }
     });

const upload = multer({ storage: storage });

// Définition des routes pour les opérations CRUD sur les appareils

// Route GET "/devices" pour récupérer tous les appareils
router.route("/")
  .get(loginMiddelware.jwtVerify,deviceController.getAllDevices)
  // Route POST "/devices" pour ajouter un nouveau appareil
  .post(loginMiddelware.jwtVerify,upload.single("deviceImage"),deviceController.addDevice);

// Route GET "/devices/:id" pour récupérer un appareil par son identifiant
// Route DELETE "/devices/:id" pour supprimer un appareil par son identifiant
// Route PATCH "/devices/:id" pour mettre à jour juste ce qu'on veut modifier d'un appareil par son identifiant
router.route("/:id")
    .get(loginMiddelware.jwtVerify,deviceController.getDeviceById)
    .delete(loginMiddelware.jwtVerify,deviceController.deleteDeviceById)
    .patch(loginMiddelware.jwtVerify,deviceController.updateDevice);

router.route("/consume/:id")
    .get(loginMiddelware.jwtVerify, )

router.route("/user/:id")
    .get(loginMiddelware.jwtVerify, deviceController.getDevicesByUser)

router.route("/categories")
     .get(getAllCategories)

// Exportation du routeur pour une utilisation ultérieure
module.exports = router;
