import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
	const [books, setBooks] = useState([]);

	const fetchBooks = async () => {
		const response = await axios.get('http://localhost:3001/books');

		setBooks(response.data);
	};

	// Called once when the page is rerendered
	useEffect(() => {
		fetchBooks();
	}, []);

	const editBookById = async (id, newTitle) => {
		const response = await axios.put(`http://localhost:3001/books/${id}`, {
			title: newTitle,
		})

		const updateBook = books.map((book) => {
			if (book.id === id) {
				return { ...book, ...response.data };
			}

			return book;
		});

		setBooks(updateBook);
	};

	const deleteBookById = (id) => {
		const updateBook = books.filter((book) => {
			return book.id !== id;
		});

		setBooks(updateBook);
	};

	const createBook = async (title) => {
		const response = await axios.post('http://localhost:3001/books', {
			title,
		});

		const updatedBook = [...books, response.data];

		setBooks(updatedBook);
	};

	return (
		<div className="app">
			<h1>Reading List</h1>
			<BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
			<BookCreate onCreate={createBook} />
		</div>
	);
};

export default App;
