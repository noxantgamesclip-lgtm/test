const mongoose = require('mongoose');

const playerProfileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    achievements: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

playerProfileSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const PlayerProfile = mongoose.model('PlayerProfile', playerProfileSchema);

module.exports = PlayerProfile;