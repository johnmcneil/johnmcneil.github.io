import React from 'react';


export default function Story({
	id,
	title,
	summary,
	link
}) {
	return (
		<section className="story-section">
			<p><a href={link}>{title}</a></p>
			<p>{summary}</p>
		</section>
	);
}