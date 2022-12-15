import React, { useState } from 'react'

function BookCreate({ onCreate }) {
	const [title, setTitle] = useState('');

	const handleChange = (e) => {
		setTitle(e.target.value);
	}

 const handleSubmit = (e) => {
		e.preventDefault();
		onCreate(title);
		setTitle(''); 
 }

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Book Title: </label>
				<input  
					type="text"  
					value={title} 
					onChange={handleChange}
				/>
				<button onSubmit={handleSubmit}>Add Book</button>
			</form>
		</div>
	) 
}

export default BookCreate 