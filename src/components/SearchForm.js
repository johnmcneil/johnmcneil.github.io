import react from 'react';
import useInput from '../hooks/useInput';
import countryCodes from '../country-codes.json';
import SelectCountry from './SelectCountry';


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
			<label>Country:
				<SelectCountry countryCodes={countryCodes} countryProps={countryProps} />
			</label>
			<label>Gas:
				<select
					{...gasProps}
					name="gas"
					placeholder="gas"
					value={gasProps.value}
					required>
					<option value="methane">Methane</option>
					<option value="ozone">Ozone</option>
					<option value="carbonmonoxide">Carbon Monoxide</option>
					<option value="nitrogendioxide">Nitrogen Dioxide</option>
				</select>
			</label>
			<br />
			<label for="begin">Start date:
				<input 
					{...beginProps}
					name="begin"
					type="date"
					min="2018-12-31"
					required
				/>
			</label>
			<label for="end">End date:
				<input
					{...endProps}
					name="end"
					type="date"
					min="2018-12-31"
					required
				/>
			</label>

			<input type="submit" value="Submit" />
		</form>
	);
}