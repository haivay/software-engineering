const mysql = require("mysql2");
const express = require("express");

const pool = mysql.createPool({
    host: "pgsha.ru",
    port: "35006",
    user: "soft0077",
    password: "90ODmy2d",
    database: "soft0077_labrab06"
});

const app = express();
const urlencodedParser = express.urlencoded({extended: false});
app.use('/css', express.static(__dirname + '/css'));
app.set("view engine", "hbs");


app.get("/", function(req, res) {
    let query = "SELECT * FROM manga";
    pool.query(query, function(err, data) {
        if (err) return console.log(err);
        res.render("index.hbs", {
            manga: data
        });
    });
});

app.get("/create", function(req, res) {
    res.render("create.hbs");
});

app.post("/create", urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const name = req.body.name;
    const author = req.body.author;
    const releaseYear = req.body.releaseYear;
    const status = req.body.status;
    const rating = req.body.rating;
    let query = "INSERT INTO manga (name, author, releaseYear, status, rating) VALUES (?,?,?,?,?)";
    let params = [name, author, releaseYear, status, rating];
    pool.query(query, params, function(err, data) {
        if (err) return console.error(err);
        res.redirect("/");
    });
});

app.get("/edit/:id", function(req, res) {
    const id = req.params.id;
    pool.query("SELECT * FROM manga WHERE id=?", [id], function(err, data) {
        if (err) return console.error(err);
        res.render("edit.hbs", {
            manga: data[0]
        });
    });
});

app.post("/edit", urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const id = req.body.id;
    const name = req.body.name;
    const author = req.body.author;
    const releaseYear = req.body.releaseYear;
    const status = req.body.status;
    const rating = req.body.rating;
    let query = "UPDATE manga SET name=?, author=?, releaseYear=?, status=?, rating=? WHERE id=?";
    let params = [name, author, releaseYear, status, rating, id];
    pool.query(query, params, function(err, data) {
        if (err) return console.error(err);
        res.redirect("/");
    });
});

app.post("/delete/:id", function(req, res) {
    const id = req.params.id;
    pool.query("DELETE FROM manga WHERE id=?", [id], function(err, data) {
        if (err) return console.log(err);
        res.redirect("/");
    });
});

app.get("/sort/:field.:direct", function(req, res) {
    const field = req.params.field;
    const direct = req.params.direct;
    let query = "SELECT * FROM manga ORDER BY " + field + " " + direct;
    pool.query(query, function(err, data) {
        if (err) return console.log(err);
        res.render("index.hbs", {
            manga: data
        });
    });
});

app.listen(3000, function() {
    console.log("смотрим работу через браузер - http://localhost:3000/");
    let isWin = process.platform === "win32";
    let hotKeys = isWin? "Ctrl+C": "Ctrl+D";
    console.log(`остановить сервер - ${hotKeys}`);
});