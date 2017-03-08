var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/results", function (req, res) {
    request("http://www.omdbapi.com/?s=california", function (error, response, body) {
        if(!error && response.statusCode == 200){
            var results = JSON.parse(body);
            res.render("results");
        }
    });
});

app.get("/", function (req, res) {
    res.send("HOME");
});

app.get("*", function (req, res) {
    res.send("404 PAGE NOT FOUND");
});

app.listen(3000, process.env.IP, function () {
    console.log("Process has started!")
});