import React, { useState } from 'react';

export default function CommentForm({ onComment = f => f }) {
	const [commentProps, resetComment] = useState("");

	const submit = e => {
		e.preventDefault();

		onComment(e.target.value);
		console.log("e.target.value", e.target.value);
	}

	return (
		<form className="comment-form" onSubmit={submit}>
			<input
				type="text"
				placeholder="Your Comment..."
				rows= "4"
				required
			/>
			<button>Send</button>
		</form>
	);
}