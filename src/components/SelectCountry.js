import React from 'react';
import PlaceOption from './PlaceOption';


export default function SelectCountry({
	countryCodes = [],
	countryProps = {}
}) {
	console.log("countryProps", countryProps);
	return (
		<select
			{...countryProps}
			name="country"
			placeholder="country"
			required
			>
		{
			countryCodes.map((country) => (
				<PlaceOption {...country} />
		))}
		</select>
	);
}
