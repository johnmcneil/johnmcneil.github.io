import React from 'react';
import CodeCloud from '../components/CodeCloud';
import PortfolioScroll from '../components/PortfolioScroll';
import chessgraphs from '../img/chessgraphs.png';
import johnmcneilme from '../img/johnmcneilme.png';
import kataymeloglu from '../img/kataymeloglu.png';
import mn350 from '../img/mn350.png';
import mn350action from '../img/mn350action.png';
import github from '../img/github.png';
import qomb from '../img/qomb.png';
import federalcourt from '../img/federalcourt-screenshot.png';
import WritingPage from './WritingPage';

const title = "<John McNeil />";
const subtitle = "{full-stack web development}";


const portfolioData = [
	{
		src: chessgraphs, 
		href: "https://www.chessgraphs.com"
	},
	{
		src: github, 
		href: "https://github.com/johnmcneil"
	},
	{
		src: kataymeloglu, 
		href: "https://www.kataymeloglu.com"
	},
	{
		src: mn350, 
		href: "https://mn350.org"
	},
	{
		src: mn350action, 
		href: "https://mn350action.org"
	},
	{
		src: johnmcneilme,
		href: "https://www.johnmcneil.me"
	},
	{
		src: federalcourt, 
		href: ""
	},
	{
		src: qomb, 
		href: ""
	},
];

const HomePage = (props) => (
	<>
	<div className="container">
		<div className="wordcloud-row row">
			<CodeCloud className="offset-md-0" />
		</div>
		<div className="title-row row">
			<h2>{title}</h2>
			<h3>{subtitle}</h3>
		</div>
		<PortfolioScroll data={portfolioData}/>      	
	</div>
	</>
);

export default HomePage;