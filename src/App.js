import React from 'react';
import { useState } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
	const [books, setBooks] = useState([]);

	const deleteBookById = (id) => {
		const updateBook = books.filter((book) => {
			return book.id !== id;
		});

		setBooks(updateBook);
	}

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
		<div className='app'>
			<BookList books={books} onDelete={deleteBookById} />
			<BookCreate onCreate={createBook} />
		</div>
	);
};

export default App;
