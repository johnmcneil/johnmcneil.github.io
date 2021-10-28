import React from 'react';


export default function Story({
	id,
	src,
	href
}) {
	return (
		<>
			<a href={href}>
				<img alt="website portfolio entry" src={src} />
			</a>
		</>
	);
}