// import React, { useState, useReducer } from 'react'

// const booksData = [
//     { id: 1, name: 'jahidul book' },
//     { id: 2, name: 'jahidul book' },
//     { id: 3, name: 'jahidul book' }
// ]

// const Model = ({ ModelText }) => {
//     return <p>{ModelText}</p>
// }

// const reducer = (state, action) => {

//     if (action.type === 'ADD') {
//         const allBooks = [...state.books, action.payload];
//         return { ...state, books: allBooks, isModel: true, ModelText: 'Data is Added' }
//     }
//     if (action.type === 'REMOVE') {
//         const filer = [...state.books].filter((book) => book.id !== action.payload);
//         return {
//             ...state,
//             books: filer,
//             isModel: true,
//             ModelText: 'Add is Remove'
//         }
//     }


//     return state;
// }


// export const UseReducer = () => {
//     const [booksState, dispatch] = useReducer(reducer, {
//         books: booksData,
//         isModel: false,
//         ModelText: '',
//     })
//     const [bookName, setbookName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newBook = { id: new Date().getTime().toString(), name: bookName };
//         dispatch({ type: 'ADD', payload: newBook });
//         setbookName('');

//     }

//     const Removebook = (id) => {
//         dispatch({ type: 'REMOVE', payload: id })
//     }

//     return (
//         <div>
//             <h3>books List</h3>
//             <form onSubmit={handleSubmit}>
//                 <input type='text' value={bookName} onChange={(e) => { setbookName(e.target.value) }} />
//                 <button type='submit'>submit</button>
//             </form>
//             {booksState.isModel && <Model ModelText={booksState.ModelText} />}
//             {booksState.books.map((book) => {
//                 const { id, name } = book;
//                 return <li key={id}>{name} <button onClick={() => { Removebook(id) }}>Remove</button></li>
//             })}
//         </div>
//     )
// }


