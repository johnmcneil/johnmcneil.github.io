import React from 'react';

export default function PlaceOption({
	name,
	code
}) {
	return (
		<option value={code}>{name}
		</option>
	);
}