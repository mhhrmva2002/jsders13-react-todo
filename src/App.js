import "./App.css";
import { useState } from "react"; //hook
import { todos } from "./data";
import Search from "./components/Search";
import Header from "./components/Header";
import SortButton from "./components/SortButton";
import AddToDo from "./components/AddToDo";
import DeleteToDo from "./components/DeleteToDo";

function App() {
  const [todosState, setTodosState] = useState(todos);
  const [todo,setTodo] = useState({name:''});

  return (
    <>
      <Header text="Todos"/>
      <Search todosState={todosState} setTodosState={setTodosState} todos={todos} placeholder="search todo(s)"/>
      <SortButton todosState={todosState} setTodosState={setTodosState}/>
      <DeleteToDo todosState={todosState} setTodosState={setTodosState} text="delete"/>
      <AddToDo todo={todo} setTodo={setTodo} todosState={todosState} setTodosState={setTodosState} text="Add todo item"/>
    </>
  );
}

export default App;