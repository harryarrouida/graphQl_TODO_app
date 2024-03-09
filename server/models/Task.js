const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    content: {
        type: String,
        required: true 
    },
    completed: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Task", TaskSchema)