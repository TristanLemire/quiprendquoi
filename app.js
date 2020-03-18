const express = require("express");
const app = express();
var methodOverride = require("method-override");
const bodyParser = require("body-parser");
const axios = require("axios");

// Environement variable
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.static("pwa"));

app.set("view engine", "pug");

app.get("/", function(req, res) {
  res.render("index", { title: "Qui prend quoi ?" });
});

app.post("/party", function(req, res) {
  axios
    .post(`${process.env.API_URL}/party`, req.body)
    .then(({ data }) => res.redirect(`/party/${data._id}`))
    .catch(err => res.send(err));
});

app.post("/party/:id/items", function(req, res) {
  axios
    .post(`${process.env.API_URL}/party/${req.params.id}/items`, req.body)
    .then(() => res.redirect(`/party/${req.params.id}`))
    .catch(err => res.send(err));
});

app.delete("/party/:id/items/:idElem", function(req, res) {
  axios
    .delete(
      `${process.env.API_URL}/party/${req.params.id}/items/${req.params.idElem} `
    )
    .then(() => res.redirect(`/party/${req.params.id}`))
    .catch(err => res.send(err));
});

app.delete("/party/:id", function(req, res) {
  axios
    .delete(`${process.env.API_URL}/party/${req.params.id}`)
    .then(() =>
      res.render("index", {
        messageParty: "événement supprimer"
      })
    )
    .catch(err => res.send(err));
});

app.patch("/party/:id", function(req, res) {
  axios
    .patch(`${process.env.API_URL}/party/${req.params.id}`, req.body)
    .then(() => res.redirect(`/party/${req.params.id}`))
    .catch(err => res.send(err));
});

app.patch("/party/:id/items/:idElem", function(req, res) {
  axios
    .patch(
      `${process.env.API_URL}/party/${req.params.id}/items/${req.params.idElem}`,
      req.body
    )
    .then(() => res.redirect(`/party/${req.params.id}`))
    .catch(err => res.send(err));
});

app.get("/party/:id", function(req, res) {
  axios
    .get(`${process.env.API_URL}/party/${req.params.id}`)
    .then(({ data }) =>
      res.render("party", {
        party: data,
        title: data.name,
        idParty: req.params.id,
        url: `${process.env.FRONT_URL}:${process.env.PORT}/party/items/${data._id}`
      })
    )
    .catch(err => console.log(err));
});

app.get("/party/:id/update", function(req, res) {
  axios
    .get(`${process.env.API_URL}/party/${req.params.id}`)
    .then(({ data }) =>
      res.render("updateEvent", {
        party: data,
        title: data.name,
        idParty: req.params.id
      })
    )
    .catch(err => console.log(err));
});

app.get("/party/:id/items/:idElem/update", function(req, res) {
  axios
    .get(`${process.env.API_URL}/party/${req.params.id}`)
    .then(({ data }) =>
      res.render("updateElem", {
        party: data,
        title: data.name,
        idParty: req.params.id,
        idElement: req.params.idElem
      })
    )
    .catch(err => console.log(err));
});

app.listen(process.env.PORT, () =>
  console.log(`Front app listening on port ${process.env.PORT}!`)
);
