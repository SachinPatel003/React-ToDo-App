import "./App.css";
import Header from "./componant/Header";
import { Footer } from "./componant/Footer";
import { TODOS } from "./componant/TODOS";
import { Addtodos } from "./componant/Addtodos";
import React, { useState } from "react";

function App() {
  const addTodo = (title, desc) => {
    let Sno;
    {todos.length !==0 ?Sno = todos[todos.length - 1].Sno + 1:Sno=1}
    const myTodos = {
      Sno: Sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodos]);
  };

  const onDelete = (todo) => {
    console.log("deletedd", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const [todos, setTodos] = useState([
  ]);
  return (
    <>
      <Header title="TODO App" searchBar={false} />
      <Addtodos addTodo={addTodo} />
      <TODOS todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
