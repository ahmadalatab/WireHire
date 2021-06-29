const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    title: String,
    company: String,
    startDate: Date,
    endDate: Date,
    description: String
});

const educationSchema = new Schema({
    school: String,
    degree: String,
    startDate: Date,
    endDate: Date,
    gpa: Number
});

const profileSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNum: {
        type: String
    },
    experience: [experienceSchema],
    education: [educationSchema]
}, {
    timestamps: true
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;