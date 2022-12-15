import React from 'react';
import { useState } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
	const [books, setBooks] = useState([]);

	const createBook = (title) => {
		console.log('Need to add book with: ', title);
	}

	return (
		<div>
			<BookList />
			<BookCreate  onCreate={createBook} />
		</div>
	);
};

export default App;
