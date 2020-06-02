const express = require("express");
const mongoose = require("mongoose");

const db = require("./configs/keys").MongoURI;
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});
