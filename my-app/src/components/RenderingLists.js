import React from 'react';
import Book from './Book';

function RenderingLists() {
    const bookList = [
        'To Kill a Mockingbird',
        'The Great Gatsby',
        'The Catcher in the Rye'
    ]

    const books = [
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            pages: 281,
        },
        {
            title: 'The Great Gatsby',
            author: 'Joe Blogs',
            pages: 381,
        },
        {
            title: 'The Catcher in the Rye',
            author: 'Billy Piper',
            pages: 271,
        },
    ]
    return (
        <div>
            <h5>Rendering Lists</h5>
            {
                bookList.map((book) => {
                    return <h2 key = {book}>{book}</h2> //when rendering lists must always add a unique key identifier.
                })
            }
            <hr />
            {
                books.map((book) => {
                    return (
                        // Key is placed on the parent div 
                        <div key={book.title}> 
                            <h2>{book.title}</h2>
                            <p>{book.author}</p>
                            <p>{book.pages}</p>
                        </div>
                    )
                })
            }
            <hr />
            {
                books.map((book) => {
                    // Key Component cannot be accessed by the child component, it is reserved for React
                    return <Book key={book.title} book = {book} /> 
                })
            }
            <hr />

        </div>
    )
}

export default RenderingLists
