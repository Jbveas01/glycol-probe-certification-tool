const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const URI = process.env.URI;

mongoose.connect(URI);

const probeSchema = new mongoose.Schema({
  _id: String,
  lot: String,
  manufactureDate: Date,
  certificationDate: Date,
  expirationDate: Date,
});

module.exports = mongoose.model("Probe", probeSchema);
