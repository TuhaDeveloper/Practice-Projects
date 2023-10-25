import React, { useState } from 'react'

import style from './new.module.css';

export default function New(props) {
    const [todo, settodo] = useState({ title: '', desc: '' })
    const { title, desc } = todo;

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onNewTodo(todo)
        settodo({ title: '', desc: '' })
    }
    const handleChange = (e) => {
        const name = e.target.name;
        settodo((oldTodo) => {
            return { ...oldTodo, [name]: e.target.value }
        })

    }
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.fild}>
                <lable htmlFor="title">Title:</lable>
                <input type="text" id="title" name="title" value={title} onChange={handleChange} />
            </div>

            <div className={style.fild}>
                <lable htmlFor="title">Description:</lable>
                <input type="text" id="desc" name="desc" value={desc} onChange={handleChange} />
            </div>
            <button className={style.btn}>Add Todo</button>
        </form>
    )
}
