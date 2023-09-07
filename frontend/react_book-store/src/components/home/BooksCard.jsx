import React from 'react';
import BookSingleCard from './BookSIngleCard';
const BooksCard = ({ books }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                books.map((book, indx) => (
                    <BookSingleCard key={indx+1} book = {book}/>
                ))
            }
        </div>
    )
}

export default BooksCard