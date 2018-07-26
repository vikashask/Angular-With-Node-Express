let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// User schema defination

let UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    password: { type: String, required: true},
}, {
    versionKey: false
});

module.exports = mongoose.model('user', UserSchema);
