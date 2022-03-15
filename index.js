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

  Probe.count({ _id: body._id }, (err, count) => {
    if (count > 0) {
      console.log("Duplicate probe found");
      return res
        .status(400)
        .send(`Probe ${body._id} already exists in the database`);
    } else {
      const probe = new Probe({
        _id: body._id,
        lot: body.lot,
        manufactureDate: body.manufactureDate,
        certificationDate: body.certificationDate,
        expirationDate: body.expirationDate,
      });

      probe.save().then((savedProbe) => {
        console.log(`Probe ${body._id} added to database`);
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
  const id = req.params.id;
  Probe.deleteOne({ _id: id })
    .then(function () {
      res.send(`Probe ${id} deleted`);
    })
    .catch((error) => {
      return res.send(error);
    });
});

app.listen(PORT, console.log("Server now running on port 3001"));
