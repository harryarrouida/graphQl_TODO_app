const Task = require("../models/Task")

const resolvers = {
    tasks: async () => {
        try {
            const tasks = await Task.find()
            return tasks.map(task => ({
                ...tasks, _id: task._id.toString()
            }))
        } catch (error) {
            console.log("error fetching tasks", error)
        }
    },
    AddTask: async (args) => {
        const Task = new Task({
            content: args.input.content,
            completed: args.input.completed
        })
        try {
            const result = Task.save()
            return {
                ...result._doc, _id:result._id.toString()
            }
        } catch (error) {
            console.log("error saving task", error)
        }
    }
}