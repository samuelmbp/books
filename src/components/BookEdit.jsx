import { useState } from "react"

function BookEdit({ book }) {
	const [title, setTitle] = useState(book.title);

	const handleChange = (e) => {
		setTitle(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('New title is:', title);
 }

	return (
		<div>
			<form onSubmit={handleSubmit} className="book-edit">
				<label>Title</label>
				<input 
					className="input" 
					value={title} 
					onChange={handleChange}
				/>
				<button className="button is-primary">Save</button>
			</form>
		</div>
	)
}

export default BookEdit