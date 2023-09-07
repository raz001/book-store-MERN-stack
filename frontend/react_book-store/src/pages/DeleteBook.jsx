import React, { useState } from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/BackButton';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack'
import { api } from '../api';
const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar()
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(api + `/books/${id}`)
      .then((res) => {
        setLoading(false)
        // alert(res.data.msg)
        enqueueSnackbar(res.data.msg, { variant: "success" })
        navigate('/')
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("error", { variant: "error" });
        console.log(err)
      })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this book?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook