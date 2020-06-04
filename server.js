//Import all libraries to the code so we can use them.
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const expressLayouts = require("express-ejs-layouts");

// Create an database const that take in an URL keys given from MongoDB
// With this key, we can use "mongoose" to connect to our MongoDB database, the database where we will store all user information, such as name, email, password, etc
const db = require("./configs/keys").MongoURI;
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//If the connection is successful, print "Mongoose is connected", else print nothing
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!");
});

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
