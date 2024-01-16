// Importation du module Mongoose
const mongoose = require("mongoose");

const consumptionSchema = new mongoose.Schema({
    consumption: String
});

const Consumption = mongoose.model("Consumption", consumptionSchema);

module.exports = Consumption;