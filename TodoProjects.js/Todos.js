import React from 'react'

import { Todo } from './Todo'
import style from './todos.module.css'

export const Todos = (props) => {
    console.log(props)
    return (
        <section className={style.todos}>
            {
                props.todos.map((todo) => <Todo key={todo.id} todo={todo.newTodo} id={todo.id} onRemoveTodo={props.onRemove} />)
            }

        </section>
    )
}
