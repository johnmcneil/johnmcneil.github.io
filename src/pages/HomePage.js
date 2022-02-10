import React from 'react';
import CodeCloud from '../components/CodeCloud';
import PortfolioScroll from '../components/PortfolioScroll';
import sentinelsp5 from '../img/sentinelsp5.png';
import climatetrace from '../img/climatetrace.png';
import chessgraphs from '../img/chessgraphs.png';
import johnmcneilme from '../img/johnmcneilme.png';
import kataymeloglu from '../img/kataymeloglu.png';
import mn350 from '../img/mn350.png';
import mn350action from '../img/mn350action.png';
import github from '../img/github.png';
import qomb from '../img/qomb.png';
import federalcourt from '../img/federalcourt-screenshot.png';
import unioncabnemt from '../img/unioncabnemt.png';
import WritingPage from './WritingPage';

const title = "<John McNeil />";
const subtitle = "{full-stack web development}";

 
const portfolioData = [
	{
		id: "1",
		src: chessgraphs, 
		href: "https://www.chessgraphs.com"
	},
	{
		id: "3",
		src: sentinelsp5, 
		href: "/#/sentinelsp5"
	},
	{
		id: "4",
		src: github, 
		href: "https://github.com/johnmcneil"
	},
	{
		id: "5",
		src: unioncabnemt,
		href: "https://unioncabnemt.com"
	},
	{
		id: "6",
		src: kataymeloglu, 
		href: "https://www.kataymeloglu.com"
	},
	{
		id: "7",
		src: mn350, 
		href: "https://mn350.org"
	},
	{
		id: "8",
		src: mn350action, 
		href: "https://mn350action.org"
	},
	{
		id: "9",
		src: johnmcneilme,
		href: "https://www.johnmcneil.me/ajax-news/"
	},
	{
		id: "10",
		src: federalcourt, 
		href: ""
	},
	{
		id: "11",
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
		<PortfolioScroll sites={portfolioData}/>      	
	</div>
	</>
);

export default HomePage;