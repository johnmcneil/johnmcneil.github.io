import React from 'react';
import CodeCloud from '../components/CodeCloud';
import PortfolioScroll from '../components/PortfolioScroll';


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
		<PortfolioScroll />
{/*	
		<div id="portfolio" className="row">
			<div className="img-container col-md-6 offset-md-3">
				<div><a href="https://www.chessgraphs.com">
					<img src={chessgraphs} />
				</a></div>
				<div><a href="https://www.johnmcneil.me/ajax-news/">
					<img src={johnmcneilme} />
				</a></div>
				<div><a href="https://github.com/johnmcneil">
					<img src={github} />
				</a></div>
				<div><a href="https://www.kataymeloglu.com">
					<img src={kataymeloglu} />
				</a></div>
				<div><a href="https://mn350.org">
					<img src={mn350} />
				</a></div>
				<div><a href="https://mn350action.org">
					<img src={mn350action} />
				</a></div>
				<img src={federalcourt} />
				<img src={qomb} />
			</div>
      	</div>
*/}      	
	</div>
);

export default HomePage;