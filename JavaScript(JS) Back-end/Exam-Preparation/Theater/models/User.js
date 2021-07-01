const { Schema, model } = require('mongoose');

const schema = new Schema({
    username: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    likedPlays: [{ type: Schema.Types.ObjectId, red: 'Play' }]
});

module.exports = model('User', schema);