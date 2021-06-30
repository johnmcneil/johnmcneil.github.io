import React from 'react';
import PortfolioCarousel from '../components/PortfolioCarousel';
import CodeCloud from '../components/CodeCloud';

const HomePage = () => (
	<div className="container">
		<div className="wordcloud-row row">
			<CodeCloud className="offset-md-0" />
		</div>
		<div className="title-row row">
			<h2>John McNeil - full-stack web development</h2>
		</div>
		<div className="carousel-row row">
      		<PortfolioCarousel className="col-12" />
      	</div>
	</div>
);

export default HomePage;