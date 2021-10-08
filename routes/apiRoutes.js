const router = require('express').Router();
const db = require('../models');

router.get('/workouts', (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put('/workouts/:id', ({ params, body }, res) => 
{
    db.Workout.findByIdAndUpdate(
        params.id,
        {
            $push: {
                exercises: body,
            },
        },
        {
            new: true,
            runValidators: true
        }
    )
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
    });
}) 

module.exports = router;