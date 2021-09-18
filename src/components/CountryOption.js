import React from 'react';

export default function CountryOption({
	name,
	code
}) {
	return (
		<option value={code}>{name}
		</option>
	);
}