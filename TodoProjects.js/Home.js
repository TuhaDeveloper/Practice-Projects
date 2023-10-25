import React, { useState } from 'react'

import { Todos } from './Todos';
import New from './New';
import style from './home.module.css'
import { v4 as uuidv4 } from 'uuid';
export default function Home() {
    const [dummy, setTodo] = useState([])

    const newMethod = (newTodo) => {
        setTodo((prev) => {
            return [...prev, { id: uuidv4(), newTodo }]
        })
        console.log(newTodo)
    }
    const RemoveTodo = (id) => {
        setTodo((prev) => {
            const filter = prev.filter((todo) => todo.id !== id);
            return filter;
        })
    }

    return (
        <div className={style.container}>
            <h1 style={{ color: "white", padding: "1rem" }}>Todo App</h1>
            <New onNewTodo={newMethod} />
            <Todos todos={dummy} onRemove={RemoveTodo} />
        </div>
    )
}
