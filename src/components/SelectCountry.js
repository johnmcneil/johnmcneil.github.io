import React from 'react';
import CountryOption from './CountryOption';


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
				<CountryOption {...country} />
		))}
		</select>
	);
}