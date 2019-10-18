const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    role: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date, required: true },
    verified: { type: Boolean },
    lastLogin: { type: Date },
    cell: { type: Number, required: true },
    securityQue1: { type: String, required: true },
    securityQue2: { type: String, required: true },
    securityQue3: { type: String, required: true },
    securityAns1: { type: String, required: true },
    securityAns2: { type: String, required: true },
    securityAns3: { type: String, required: true }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;