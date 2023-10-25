import React, { useState, useEffect } from 'react'

const Search = (props) => {

    const [searchText, setsearchText] = useState('');

    const handleChange = (e) => {
        setsearchText(e.target.value);
    };

    useEffect(() => {
        props.onSearch(searchText)

    }, [searchText])


    return (
        <div style={{ textAlign: 'center' }}>
            <input style={{ border: '2px solid black' }} type="text" placeholder="Search Country" value={searchText} onChange={handleChange} />

        </div>
    )
}

export default Search