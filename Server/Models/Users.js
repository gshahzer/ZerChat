const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
        email: String,
        fullname: String,
        password: String,
        subscribed: Boolean
},  { timestamps: true })

const UsersModel = mongoose.model("users", UsersSchema)

module.exports = UsersModel