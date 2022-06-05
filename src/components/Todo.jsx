import React from 'react'
import { useState } from 'react'
import TodoItems from './TodoItems'
import Center from './Center.css'


const Todo = () => {
    let [newValue,setValue] = useState("")
    const [todos,setTodos] = useState([])

    const onDelete =(id)=>{
        let newTodos = todos.filter((todo)=>todo.id!=id)
        setTodos(newTodos)
    }

   
    return (
         <div className='center'><h1 className='hfour'>TodoApp</h1>

       <div className='flex'>
            <div  className='inp'>
              <input  placeholder='Write Something' value={newValue} onChange={(e)=>setValue(e.target.value)}
            //  onKeyDownCapture={e=>{
            //      if(e.key==="Enter")
            //      {
            //         setTodos([...todos,
            //             {id:Date.now(),value:newValue}
            //         ])
            //         setValue("")
            //      }
            //  }}
             />
            </div>

            <div>
               <button 
               className='butt'
                onClick={()=>{
                   console.log(newValue)
                      setTodos([...todos,
                     {id:Date.now(),value:newValue}
                  ])
                    setValue("")
                 }}><h1>+</h1></button>
            </div>
              
     </div>   

             {todos.map((x)=>{
                 return (
                   <TodoItems key={x.id} todo={x} onDelete={onDelete}/>
                 )
             })}
         </div>
    )   
}
export default Todo