// creating express app.
const express = require("express");
const app = express();
const port = 8000;

// setting view engine to ejs and specifying directories.
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("assets"));
app.use(express.urlencoded());

// routing
app.use("/", require("./routes/"));

// launching the server.
app.listen(port, function(err) {
  if (err) {
    console.log("Server down");
  }
  console.log("Server is up and running");
});
