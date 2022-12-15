import React from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
	return (
		<div>
			<BookCreate />
			<BookList />
		</div>
	);
};

export default App;
