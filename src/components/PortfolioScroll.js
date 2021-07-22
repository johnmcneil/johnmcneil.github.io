import React from 'react';
import PortfolioScrollItem from './PortfolioScrollItem';

const PortfolioScroll = ({ list = [] }) => {
	return(
		<div id="portfolioScroll" className="row">
			<div className="img-container col-md-6 offset-md-3">
				<PortfolioScrollItem />
			</div>
		</div>
	);
}


export default PortfolioScroll;