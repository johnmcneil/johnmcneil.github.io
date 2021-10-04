import react from 'react';
import useInput from '../hooks/useInput';
import countryCodes3Letter from '../country-codes-3letter.json';
import SelectCountry from './SelectCountry';


export default function ClimateTraceSearchForm({ onSearch = f => f }) {
	const [countryProps, resetCountry] = useInput("USA");

	const submit = e => { 
		e.preventDefault();

		console.log("countryProps", countryProps);
		

		onSearch(countryProps.value);		
	};

	return (
		<form onSubmit={submit}>
			<label>Country:
				<SelectCountry countryCodes={countryCodes3Letter} countryProps={countryProps} />
			</label>

			<input type="submit" value="Submit" />
		</form>
	);
}