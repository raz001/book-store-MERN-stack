import express from 'express';
import { Book } from '../models/book.model.js';
const bookRouter = express.Router();

// route to save a new book
bookRouter.post('/', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).json({ msg: 'Send all required fields: title, author, publishYear' })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };
        const book = await Book.create(newBook);
        return res.status(201).json({
            msg: "Book added successfuly",
            book
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error.message })
    }
})

// route to Get books from DB
bookRouter.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json({
            count: books.length,
            data: books
        })
    } catch (error) {
        return res.status(400).json(error)
    }
})

// route to Get one book from DB by id
bookRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id);
        return res.status(200).json(book)
    } catch (error) {
        return res.status(400).json(error)
    }
})

//route for update a book
bookRouter.put('/:id', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).json({ msg: 'Send all required fields: title, author, publishYear' })
        }
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(500).json({ msg: "book not found" })
        };
        return res.status(200).json({ msg: "Book updated successfully" })
    } catch (error) {
        return res.status(500).json(error)
    }
})

//route for delete a book

bookRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return res.status(500).json({ msg: "book not found" })
        };
        return res.status(200).json({ msg: "Book deleted successfully" })
    } catch (error) {
        return res.status(500).json(error)
    }
});

export default bookRouter;