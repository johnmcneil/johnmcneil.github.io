import React from 'react';
import PortfolioCarousel from '../components/PortfolioCarousel';
import CodeCloud from '../components/CodeCloud';

const title = "<John McNeil />";
const subtitle = "{full-stack web development}";
const HomePage = () => (
	<div className="container">
		<div className="wordcloud-row row">
			<CodeCloud className="offset-md-0" />
		</div>
		<div className="title-row row">
			<h2>{title}</h2>
			<h3>{subtitle}</h3>
		</div>
		<div className="carousel-row row">
      		<PortfolioCarousel />
      	</div>
	</div>
);

export default HomePage;