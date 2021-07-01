import React, { Component } from 'react';
import PortfolioCarousel from '../components/PortfolioCarousel';
import CodeCloud from '../components/CodeCloud';
import chessgraphs from '../img/chessgraphs.png';
import johnmcneilme from '../img/johnmcneilme.png';
import kataymeloglu from '../img/kataymeloglu.png';
import mn350 from '../img/mn350.png';
import mn350action from '../img/mn350action.png';
import github from '../img/github.png';
import qomb from '../img/qomb.png';
import federalcourt from '../img/federalcourt-screenshot.png';

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
		<div id="portfolio" className="row">
			<div className="img-container col-md-6 offset-md-3">
				<img src={chessgraphs} />
				<img src={johnmcneilme} />
				<img src={github} />
				<img src={kataymeloglu} />
				<img src={mn350} />
				<img src={mn350action} />
				<img src={federalcourt} />
				<img src={qomb} />
			</div>
      	</div>
	</div>
);

export default HomePage;