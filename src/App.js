import React from 'react';
import { useState } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
	const [books, setBooks] = useState([]);

	const editBookById = (id, newTitle) => {
		const updateBook = books.map((book) => {
			if (book.id === id) {
				return { ...book, title: newTitle };
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

	const createBook = (title) => {
		const updatedBook = [
			...books,
			{
				id: Math.round(Math.random() * 9999),
				title,
			},
		];

		setBooks(updatedBook);
	};

	return (
		<div className="app">
			<BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
			<BookCreate onCreate={createBook} />
		</div>
	);
};

export default App;
