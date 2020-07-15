//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date =require (__dirname +"/date.js");
let workitem = [];
let item = ["Buy food", "cook food", "eat Food"];

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  
	let n= date();
    res.render('list', { kday: n, simp: item });
});
app.get("/work", function(req, res) {
    res.render("list", { kday: "Work List", simp: workitem });
})
app.post("/", function(req, res) {
    let x = req.body.sim;
    if (req.body.button == 'Work') {
        workitem.push(x);
        res.redirect("/work");
    } else {
        item.push(x);
        res.redirect("/");
    }



});
app.post("/work", function(req, res) {
    let x = req.body.sim;
    workitem.push(x);
    res.redirect("/work");
});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});