const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: [true, 'Name field are required!'], minLength: 4 },
    city: { type: String, required: [true, 'City field are required!'], minLength: 3 },
    imageUrl: { type: String, required: [true, 'ImageUrl field are required!'], match: [/^https?/, 'Image must be a valid URL']},
    rooms: { type: Number, required: [true, 'Rooms field are required!'], min: 1, max: 100 },
    bookedBy: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    owner: {type: Schema.Types.ObjectId, ref: 'User', required: true}
});

module.exports = model('Hotel', schema);