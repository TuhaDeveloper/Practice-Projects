import React from 'react'

import style from './country.module.css'

export const Country = (props) => {
    const { name, flags, capital, population, area } = props.country;

    const handleRemove = (value) => {
        props.onRemoveMethod(value);
    }

    return (
        <article className={style.div}>
            <div>
                <img src={flags.png} alt={name.common} className={style.flag} />
                <div className={style.ptag}>
                    <h3>Name :{name.common}</h3>
                    <h3>population :{population}</h3>
                    <h3>capital :{capital}</h3>
                    <h3>area :{area}</h3>
                </div>

            </div>
            <button onClick={() => { handleRemove(name.common) }} className={style.btn} >Remove</button>

        </article>
    )
}
