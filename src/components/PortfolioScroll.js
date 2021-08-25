import React from 'react';
import PortfolioScrollItem from './PortfolioScrollItem';

const PortfolioScroll = (props) => {
	console.log(props);
	return(
		<div id="portfolioScroll" className="row">
			<div className="img-container col-md-6 offset-md-3">
				<PortfolioScrollItem data={props.data[0]} />
				<PortfolioScrollItem data={props.data[1]} />
				<PortfolioScrollItem data={props.data[2]} />
				<PortfolioScrollItem data={props.data[3]} />
				<PortfolioScrollItem data={props.data[4]} />
				<PortfolioScrollItem data={props.data[5]} />
				<PortfolioScrollItem data={props.data[6]} />
				<PortfolioScrollItem data={props.data[7]} />
			</div>
		</div>
	);
}


export default PortfolioScroll;