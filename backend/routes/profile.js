const express = require('express');
const Profile = require('../models/profile');
const profileRouter = express.Router();

profileRouter.route('/')
    .get((req, res) => {
        Profile.find()
            .then(campsites => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(campsites);
            })
            .catch(err => next(err));
    })

profileRouter.route('/:userId')
    .put((req, res) => {
        Profile
            .findByIdAndUpdate(req.params.userId, {
                $set: req.body
            }, { new: true })
            .then(user => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            })
            .catch(err => next(err));
    })    

module.exports = profileRouter; 