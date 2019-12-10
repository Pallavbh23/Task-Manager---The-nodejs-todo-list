const express = require("express");
// creating router.
const router = express.Router();
const app = express();
// importing db
const db = require("../config/mongoose");
app.use(express.urlencoded());
console.log("Router loaded");
// importing controllers.
const homeController = require("../controllers/home_controller");

// landing page
router.get("/", homeController.home);

// adding task
router.post("/addtask", homeController.addtask);

// deleting task
router.post("/deletetask", homeController.deletetask);
module.exports = router;
