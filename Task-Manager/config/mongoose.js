const mongoose = require("mongoose");
// connecting to database.
mongoose.connect("mongodb://localhost/task_manager_db", {
  useNewUrlParser: true
});
var db = mongoose.connection;
// starting the connection.
db.on("error", console.error.bind(console, "Error connecting to DB!"));
db.once("open", function() {
  console.log("Successfully connected to DB!");
});
