const dotenv = require("dotenv");
dotenv.config();
const Probe = require("./models/probe");
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const { default: mongoose } = require("mongoose");
app.use(cors());
const PORT = 3001;

app.post("/api/probes", (req, res) => {
  ///Posts a probe to the Database
  const body = req.body;
  const re = /^GP\d{5}$/;
  Probe.count({ _id: body._id.toUpperCase() }, (err, count) => {
    const id = body._id.toUpperCase();
    if (count > 0) {
      console.log("Duplicate probe found");
      return res
        .status(400)
        .send(
          `Probe ${id} already exists in the database. Please input a new probe`
        );
    } else if (!id.match(re)) {
      return res
        .status(400)
        .send(
          `Probe Serial does not match the correct format. Please use the following format GP#####`
        );
    } else {
      const probe = new Probe({
        _id: id,
        lot: body.lot.toUpperCase(),
        manufactureDate: body.manufactureDate,
        certificationDate: body.certificationDate,
        expirationDate: body.expirationDate,
      });

      probe.save().then((savedProbe) => {
        console.log(`Probe ${id} added to database`);
        res.json(savedProbe);
      });
    }
  });
});

app.get("/api/probes", (req, res) => {
  Probe.find({}).then((probe) => {
    res.json(probe);
  });
});

app.get("/api/probes/:id", (req, res) => {
  const id = req.params.id;
  Probe.findById(id).then((probe) => {
    res.json(probe);
  });
});

app.delete("/api/probes/:id", (req, res) => {
  const id = req.params.id.toUpperCase();
  Probe.count({ _id: id }, (err, count) => {
    if (count > 0) {
      Probe.deleteOne({ _id: id }).then(function () {
        res.send(`Probe ${id} deleted`);
      });
    } else {
      return res
        .status(404)
        .send(`Probe ${id} not found in database. Nothing was deleted.`);
    }
  });
});

app.listen(PORT, console.log("Server now running on port 3001"));
