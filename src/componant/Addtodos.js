import React, { useState } from 'react'

export const Addtodos = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const Submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot Be blank")
        }
        else{
            props.addTodo(title,desc)
            setTitle("")
            setDesc("")
        }
    }


    return (
        <>
            <h5 className='text-center my-1'>Add ToDos</h5>
            <form onSubmit={Submit} className='container my-1'>
                <div className="row mb-3">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="Description" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="Description"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-sm btn-primary my-2">Add ToDo</button>
            </form>
        </>
    )
}
