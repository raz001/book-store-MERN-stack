import React from 'react'
import { Link } from 'react-router-dom'
import { PiBookOpenTextLight } from 'react-icons/pi';
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { BiUserCircle } from 'react-icons/bi'
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