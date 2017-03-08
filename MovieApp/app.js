var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/results", function (req, res) {
    request("http://www.omdbapi.com/?s=idaho", function (error, response, body) {
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.get("/", function (req, res) {
    res.render("search");
});

app.get("*", function (req, res) {
    res.send("404 PAGE NOT FOUND");
});

app.listen(3000, process.env.IP, function () {
    console.log("Process has started!");
});