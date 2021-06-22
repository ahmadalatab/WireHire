const express = require('express');
const profileRouter = express.Router();

profileRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Get user profile information');
    })
    .post((req, res) => {
        res.end('New user profile created');
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('Profile information updated');
    })    

module.exports = profileRouter; 