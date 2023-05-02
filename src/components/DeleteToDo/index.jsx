import React from "react";
import DoneToDo from "../DoneToDo";

function DeleteToDo({todosState,setTodosState, text}) {
  function handleDelete(id) {
    setTodosState(todosState.filter((stu) => stu.id !== id));
  }
  return (
    <>
      <ul>
        {todosState.map((todo, idx) => {
          return (
            <li key={idx}>
              {todo.name}{" "}
              <button onClick={() => handleDelete(todo.id)}>{text}</button>
              <DoneToDo todo={todo}/>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DeleteToDo;
