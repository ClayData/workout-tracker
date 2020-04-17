const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "String is required"
            },
            type: {
                type: String,
                trim: true,
                required: "String is required"
            },
            weight: {
                type: Number,
                trim: true,
                required: false
            },
            sets: {
                type: Number,
                trim: true,
                required: false
            },
            reps: {
                type: Number,
                trim: true,
                required: false
            },
            duration: {
                type: Number,
                trim: true,
                required: false
            },
            distance: {
                type: Number,
                trim: true,
                required: false
            }
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
