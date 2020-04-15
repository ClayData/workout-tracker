const mongojs = require("mongojs");
const db = require('../models');

module.exports = function(app) {

app.post("/api/workouts", ({body}, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
})

app.put("/api/workouts/:id", (req, res) => {
    db.Exercise.insertOne({_id: mongojs.ObjectID(req.params.id)}, {
        $set: {
            type: req.body.type,
            name: req.body.name,
            weight: req.body.weight,
            sets: req.body.sets,
            reps: req.body.reps,
            duration: req.body.duration
        }
    })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
})

app.get("/api/workouts",(req, res) => {
    db.Workout.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({date: req.body}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });

}
