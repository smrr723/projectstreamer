var express = require('express');
var router = express.Router({
    mergeParams: true
});

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index");
})
;router.get("/hello", function(req, res) {
  res.render("hello");
});

router.get("/1", function(req, res) {
  res.render("index1");
});

router.get("/test/:content", function(req, res) {
  res.render("content", {
    content: req.params.content
  });
});

module.exports = router;
