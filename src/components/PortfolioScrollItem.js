import React from 'react';


const PortfolioScrollItem = (props) => {
	return (
		<>
		<a href={props.data.href}>
			<img src={props.data.src} />
		</a>
		</>
	);
}

export default PortfolioScrollItem;