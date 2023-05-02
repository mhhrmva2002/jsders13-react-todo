import React from 'react'

function Search({todosState,setTodosState, todos, placeholder}) {
  function handleSearch(e) {
    if (e.target.value.trim()==="") {
       setTodosState(todos);
    }
    else{
     let filteredtodos = todosState.filter((todo,idx)=>todo.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()));
     setTodosState(filteredtodos);
    }
 }
  return (
    <>
      <input onChange={(e)=>handleSearch(e)} placeholder={placeholder}/>
    </>
  )
}

export default Search
