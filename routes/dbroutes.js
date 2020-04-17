const mongojs = require("mongojs");
const Workout = require('../models/workoutModel');

module.exports = function(app) {

app.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
})

app.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(params.id, 
      {$push: { exercises: body} },)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
})

app.get("/api/workouts",(req, res) => {
    Workout.find({}).then(dbWorkout => {
       res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      })
    });
  

app.get("/api/workouts/range", (req, res) => {
  Workout.find({}).then(dbWorkout => {
    res.json(dbWorkout);
   })
   .catch(err => {
     res.json(err);
   })
 });

}
