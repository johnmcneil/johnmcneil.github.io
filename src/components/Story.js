import React from 'react';


export default function Story({
	id,
	title,
	summary,
	link
}) {
	return (
		<section>
			<h1><a href={link}>{title}</a></h1>
			<p>{summary}</p>
		</section>
	);
}