import React from 'react'

export const TODOitems = (props) => {
  return (
    <>
    <h4>{props.todo.title}</h4>
    <p>{props.todo.desc}</p>
    <button className="btn btn-sm btn-primary" onClick={()=>{props.onDelete(props.todo)}}>delete</button><hr />
    </>
  )
}
