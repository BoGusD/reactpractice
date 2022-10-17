const express = require("express");

const router = express.Router();

const mongoClient = require("./mongo");

const email = [
  {
    email: "",
    Password: "",
  },
];

router.get("/", (req, res) => {
  const userLen = USER.length;
  res.render;
});
