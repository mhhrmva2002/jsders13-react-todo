import React from 'react'

function SortButton(props) {
  function handleSort() {
    let sortedtodos = [...props.todosState.filter(item => item.isdone).sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    })]
    props.setTodosState(sortedtodos);
    console.log(props.todosState);
  }
  return (
    <>
       <button onClick={handleSort}>sort by name</button>
    </>
  )
}

export default SortButton
