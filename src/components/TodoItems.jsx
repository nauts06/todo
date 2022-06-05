import React from 'react'
import { useState } from 'react';

const TodoItems = ({todo,onDelete}) => {
    const [isCompleted,setIsCompleted] = useState(todo.isCompleted)
  return (
    <div className='item' key={todo.id}>
        <input 
         type="checkbox"
         checked={isCompleted}
         onChange={(e)=>{
            setIsCompleted(e.target.checked)
            console.log(e.target.checked)

            }}
         />
         <div className='flextwo'>
             <div>{todo.value}</div>
             <button onClick={()=>onDelete(todo.id)}>Delete</button>
        </div>
    </div>
  )
}
export default TodoItems