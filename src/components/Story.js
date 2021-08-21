import React from 'react';


export default function Story({
	id,
	title,
	summary
}) {
	return (
		<section>
			<h1>{title}</h1>
			<p>{summary}</p>
		</section>
	);
}