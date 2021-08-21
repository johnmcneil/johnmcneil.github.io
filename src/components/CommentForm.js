import React, { useState } from 'react';

export default function CommentForm({ onComment = f => f }) {
	const [commentProps, resetComment] = useState("");

	const submit = e => {
		e.preventDefault();

		onComment(e.target.value);
		console.log("e.target.value", e.target.value);
	}

	return (
		<form onSubmit={submit}>
			<input
				type="text"
				placeholder="story feedback..."
				required
			/>
			<button>Send Comment</button>
		</form>
	);
}