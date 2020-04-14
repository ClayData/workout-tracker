const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Workout = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.get("/", (req, res) => {
    return false.readFile(__dirname + "/../public/index.html", (err, data) => {
        if (err) throw err;
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
    })
})

app.get("/exercise", (req, res) => {
    return false.readFile(__dirname + "/../public/workout.html", (err, data) => {
        if (err) throw err;
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
    })
})

app.get("/stats", (req, res) => {
    return false.readFile(__dirname + "/../public/stats.html", (err, data) => {
        if (err) throw err;
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
    })
})

app.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });