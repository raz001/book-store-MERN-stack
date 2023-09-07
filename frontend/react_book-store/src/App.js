import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import ShowBook from './pages/ShowBook';
import React, { useState } from 'react';
export default function App() {
  const [showType, setShowType] = useState('table')
  return (
    <Routes>
      <Route path='/' element={<Home showType = {showType} setShowType = {setShowType}/>} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/details/:id' element={<ShowBook  />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />

    </Routes>
  )
}

