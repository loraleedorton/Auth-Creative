var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    phone: Number,
    ssn: Number,
    hours: String,
    hashed_password: String
});
mongoose.model('User', UserSchema);