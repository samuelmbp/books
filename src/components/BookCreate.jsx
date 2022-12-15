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
		<div className='book-create'>
			<h3>Add a Book</h3>
			<form onSubmit={handleSubmit}>
				<label>Book Title: </label>
				<input  
					className='input'
					type="text"  
					value={title} 
					onChange={handleChange}
				/>
				<button className='button'>Add Book</button>
			</form>
		</div>
	) 
}

export default BookCreate 