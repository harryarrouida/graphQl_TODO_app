const Task = require("../models/Task");

const resolvers = {
    Query: {
        tasks: async () => {
            try {
                const tasks = await Task.find();
                return tasks.map(task => ({
                    ...task._doc, _id: task._id.toString()
                }));
            } catch (error) {
                console.log("error fetching tasks", error);
                throw error;
            }
        },
    },
    Mutation: {
        AddTask: async (parent, args) => {
            const newTask = new Task({
                content: args.input.content,
                completed: args.input.completed
            });

            try {
                const result = await newTask.save();
                return {
                    ...result._doc, _id: result._id.toString()
                };
            } catch (error) {
                console.log("error saving task", error);
                throw error;
            }
        },
    },
};

module.exports = resolvers;
