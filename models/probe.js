const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const password = process.argv[2];

const url = process.env.URL;

mongoose.connect(url);

const probeSchema = new mongoose.Schema({
  _id: String,
  lot: String,
  manufactureDate: Date,
  certificationDate: Date,
  expirationDate: Date,
});

const Probe = mongoose.model("Probe", probeSchema);

module.exports = mongoose.model("Probe", probeSchema);
