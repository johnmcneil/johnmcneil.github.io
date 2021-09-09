import react from 'react';
import useInput from '../hooks/useInput';

export default function SearchForm({ onSearch = f => f }) {
	const [countryProps, resetCountry] = useInput("us");
	const [gasProps, resetGas] = useInput("methane");
	const [beginProps, resetBegin] = useInput("2020-01-01");
	const [endProps, resetEnd] = useInput("2021-01-01");

	const submit = e => { 
		e.preventDefault();
		onSearch(countryProps.value, gasProps.value, beginProps.value, endProps.value);
		resetCountry();
		resetGas();
		resetBegin();
		resetEnd();
	};

	return (
		<form onSubmit={submit}>
			<input
				{...countryProps}
				type="text"
				placeholder="country"
				required
			/>
			<input
				{...gasProps}
				type="text"
				placeholder="gas"
				required
			/>
			<input 
				{...beginProps}
				type="date"
				placeholder="begin"
				required
			/>
			<input
				{...endProps}
				type="date"
				placeholder="end"
				required
			/>
			<button>Submit</button>
		</form>
	);
}