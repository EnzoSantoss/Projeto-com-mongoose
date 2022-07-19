const mongoose = require("mongoose");
const { Schema } = mongoose;

const AppModel = mongoose.model(
  "Nome da tabela?",
  new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
  })
);

module.exports = AppModel;
