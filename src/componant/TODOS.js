import React from 'react'
import { TODOitems } from './TODOitems'

export const TODOS = (props) => {
  let Style = {
    minHeight: "100vh",
  }
  return (
    <div className='container my-3' style={Style}>
      <div className='text-center' style={{fontSize:"2rem", fontWeight:"bold"}}>TODOS</div>
      {props.todos.lengh === 0? "No Todos to display" :
        props.todos.map((todos)=>{
          return <TODOitems todo={todos} key={todos.Sno} onDelete={props.onDelete} />
        })
      }
    </div>
  )
}
