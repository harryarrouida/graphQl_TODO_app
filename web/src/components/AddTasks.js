import React, {useState} from 'react'
import { gql, useMutation } from '@apollo/client'

const ADD_TASK = gql`
    mutation addTask($input: TaskInput!){
        AddTask(input: $input){
            _id 
            content 
            completed
        }
    }
`

export default function AddTasks() {

    const [content, setContent] = useState() 

    const [addTask] = useMutation(ADD_TASK)

    const handleChange = async (e) => {
        setContent(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await addTask({
              variables: {
                input: {
                  content: content,
                  completed: false,
                },
              },
            });
      
            console.log('Task added successfully:', result);
        } catch (error) {
            console.log("failed to add task :", error)
        }
        setContent()
    }
  return (
    <div>
        <h1>Add A Task :</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' name='content' onChange={handleChange} placeholder='what needs to be done ?'></input>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}
