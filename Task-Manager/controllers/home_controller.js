const tasks = require("../models/tasks"); // importing model

// home controller
module.exports.home = function(req, res) {
  tasks.find({}, function(err, task) {
    if (err) {
      console.log("Error in fetching contacts from db.");
      return;
    }
    return res.render("home", { tasks: task });
  });
};

// controller to add tasks
module.exports.addtask = function(req, res) {
  console.log(req.body);
  if (req.body.date != "") {
    // adding date with task if date is given.
    tasks.create(
      {
        task: req.body.task,
        date: req.body.date,
        type: req.body.type
      },
      function(err, newtask) {
        if (err) {
          console.log("Error occured while creating the task schema");
          console.log(err);
          return;
        }
        return res.redirect("back");
      }
    );
  } else {
    // creating task when date is not given.
    tasks.create(
      {
        task: req.body.task,
        date: "No Deadline",
        type: req.body.type
      },
      function(err, newtask) {
        if (err) {
          console.log("Error occured while creating the task schema");
          console.log(err);
          return;
        }
        return res.redirect("back");
      }
    );
  }
};

// making the delete task function.
module.exports.deletetask = function(req, res) {
  // deleting id-wise.
  for (let i in Object.keys(req.body)) {
    var id = Object.keys(req.body)[i];
    tasks.findByIdAndDelete(id, function(err) {
      if (err) {
        console.log("Could not pass");
      }
    });
  }
  return res.redirect("back");
};
