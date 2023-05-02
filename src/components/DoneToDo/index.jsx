import React from 'react'

function DoneToDo({todo}) {
    function handleDone() {
        if(todo.isdone===false){
            todo.isdone=true
        }else{
            todo.isdone=false
        }
    }
  return (
    <>
      <button onClick={handleDone}>Done</button>
    </>
  )
}

export default DoneToDo
