import React from 'react';


export default function Story({
	id,
	src,
	href
}) {
	return (
		<>
			<a href={href}>
				<img src={src} />
			</a>
		</>
	);
}