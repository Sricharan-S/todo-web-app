import React, { useState } from "react";
const AddTodo = () => {
    const [todoInput, setTodoInput] = useState("");
    const inputHandler = (e) => {
        setTodoInput(e.target.value);
    }

    const addTodoHandler = async (e) => {
        if(!todoInput) return;
        try{
            await fetch("https://8pnsl64e0j.execute-api.ap-south-1.amazonaws.com/add_todo", { 
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: `{
                   "todoTitle": ${todoInput},
                   "completed": false,
                   "starred": false
                  }`,
            });
        } catch(e){
            alert("add todos failed", e?.message);
        }
    }

    return (
        <>
            <input onChange={inputHandler} value={todoInput}/>
            <button onClick={addTodoHandler}>add</button>
        </>
    );
}

export default AddTodo;