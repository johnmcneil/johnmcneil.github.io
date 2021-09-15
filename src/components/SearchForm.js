import react from 'react';
import useInput from '../hooks/useInput';

export default function SearchForm({ onSearch = f => f }) {
	const [countryProps, resetCountry] = useInput("us");
	const [gasProps, resetGas] = useInput("methane");
	const [beginProps, resetBegin] = useInput("2020-01-01");
	const [endProps, resetEnd] = useInput("2021-01-01");

	const submit = e => { 
		e.preventDefault();

		console.log("countryProps", countryProps);
		console.log("gasProps", gasProps);
		console.log("beginProps", beginProps);
		console.log("endProps", endProps);
		
		onSearch(countryProps.value, gasProps.value, beginProps.value, endProps.value);
		
	};

	return (
		<form onSubmit={submit}>
			<input
				{...countryProps}
				name="country"
				type="text"
				placeholder="country"
				required
			/>
			<select
				{...gasProps}
				name="gas"
				placeholder="gas"
				required>
				<option value="methane">Methane</option>
				<option value="ozone">Ozone</option>
				<option value="carbonmonoxide">Carbon Monoxide</option>
				<option value="nitrogendioxide">Nitrogen Dioxide</option>
			</select>
			<input 
				{...beginProps}
				name="begin"
				type="date"
				placeholder="begin"
				required
			/>
			<input
				{...endProps}
				name="end"
				type="date"
				placeholder="end"
				required
			/>
			<input type="submit" value="Submit" />
		</form>
	);
}