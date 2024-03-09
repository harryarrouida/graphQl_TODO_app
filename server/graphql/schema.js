const {gql} = require("apollo-server-express")

const typeDefs = gql`
    type Query {
        tasks: [Task!]!
    }
    type Task {
        _id: ID!
        content: String!
        completed: Boolean!
    }
    input TaskInput {
        content: String!
        completed: Boolean!
    }
    type Mutation {
        AddTask(input: TaskInput) : Task!
    }
`

module.exports = typeDefs