import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_TASKS = gql`
  {
    tasks {
      _id
      content
      completed
    }
  }
`;

export default function GetTasks() {
  const { data, loading, error } = useQuery(GET_TASKS);
  if (loading) return <p>loading...</p>;
  if (error) return <p>error getting tasks : {error.message}</p>;
  return (
    <div>
      <h1>Tasks List :</h1>
      {data.tasks.map((task) => (
        <li key={task._id}>
          {task.content} - {(task.completed).toString()}
        </li>
      ))}
    </div>
  );
}
