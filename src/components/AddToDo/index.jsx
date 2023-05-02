import React from "react";
import { v4 as uuidv4 } from "uuid";

function AddToDo({
  todo,
  setTodo,
  todosState,
  setTodosState,
  text,
}) {
  function handleAddtodo(e) {
    e.preventDefault();
    todo.id = uuidv4();
    todo.isdone=false;
    console.log(todo)
    setTodosState([...todosState, todo]);
    setTodo({ name: "" });
  }
  function handleChange(e) {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  }
  return (
    <>
      <h4>Add new todo</h4>
      <form onSubmit={handleAddtodo}>
        <input
          name="name"
          value={todo.name}
          onChange={(e) => handleChange(e)}
          placeholder="name"
          type="text"
        />
        <button type="submit">{text}</button>
      </form>
    </>
  );
}

export default AddToDo;
