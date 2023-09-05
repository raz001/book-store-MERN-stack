import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: {
        name: String,
        required: true
    },
    author: {
        name: String,
        required: true
    },
    publishYear: {
        name: String,
        required: true
    }
});

export const Book = mongoose.model('book', bookSchema)
