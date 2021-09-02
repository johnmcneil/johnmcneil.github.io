import React from 'react';
import PortfolioScrollItem from './PortfolioScrollItem';

export default function PortfolioScroll({
	sites = []
})	{
	console.log("PortfolioScroll function sites", sites);
	return(
		<div id="portfolioScroll" className="row">
			<div className="img-container col-md-6 offset-md-3">
				{
					sites.map(site => (
						<PortfolioScrollItem 
							key={site.id}
							{...site}
						/>
				))}
			</div>
		</div>
	);
}