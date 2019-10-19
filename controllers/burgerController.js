var express = require("express");
var burgerDb = require("../models/burgermodel.js");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgerDb.all(function(data) {
    var Obj = {
      burgers: data
    };
    console.log(Obj);
    res.render("index", Obj);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log("Going to Create");
  console.log(req.body)

  burgerDb.create(["burger_name", "devoured"], [req.body.name, 0], function(
    result
  ) {
    res.status(200).end();
  });
});

router.put("/api/burgers/", function(req, res) {
  console.log("Going to Update");
  console.log(req.body)
  burgerDb.update({"devoured": 1}, {"id":req.body.id}, function(
    result
  ) {
    res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
