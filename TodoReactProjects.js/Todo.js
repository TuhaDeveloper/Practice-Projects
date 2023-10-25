import React from 'react'

import style from './todo.module.css'
export const Todo = (props) => {
    const { title, desc } = props.todo
    const { id } = props;
    const handleClick = (id) => {
        props.onRemoveTodo(id)

    }
    return (
        <article className={style.allTodo}>

            <div className={style.todo}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div>
                <button className={style.btn} onClick={() => {
                    { handleClick(id) }
                }}>
                    <span>del</span>
                </button>
            </div>

        </article>
    )
}
