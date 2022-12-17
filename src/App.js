import React from 'react';
import {useEffect } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import useBooksContext from './hooks/use-books-context';

const App = () => {
	const { fetchBooks } =  useBooksContext();

	// Called once when the page is rerendered []
	useEffect(() => {
		fetchBooks();
	}, []);

	return (
		<div className="app">
			<h1>Reading List</h1>
			<BookList />
			<BookCreate />
		</div>
	);
};

export default App;
