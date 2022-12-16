import React from 'react';
import { useState } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
	const [books, setBooks] = useState([]);

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
		<div>
			<BookList />
			{books.length}
			<BookCreate onCreate={createBook} />
		</div>
	);
};

export default App;
