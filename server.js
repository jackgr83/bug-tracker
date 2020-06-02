const express = require("express");
const mongoose = require("mongoose");
const app = express();

const db = require("./configs/keys").MongoURI;
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
