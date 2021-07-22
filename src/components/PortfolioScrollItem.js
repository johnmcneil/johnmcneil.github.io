import React from 'react';
import chessgraphs from '../img/chessgraphs.png';
import johnmcneilme from '../img/johnmcneilme.png';
import kataymeloglu from '../img/kataymeloglu.png';
import mn350 from '../img/mn350.png';
import mn350action from '../img/mn350action.png';
import github from '../img/github.png';
import qomb from '../img/qomb.png';
import federalcourt from '../img/federalcourt-screenshot.png';

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
		src: qomb,
		href: ""
	},
	{
		src: federalcourt,
		href: ""
	},
];

console.log('portfolioData', portfolioData);

const PortfolioScrollItem = (props) => {
	return (
		<>
		<a href={portfolioData[0].href}>
			<img src={portfolioData[0].src} />
		</a>
		<a href={portfolioData[1].href}>
			<img src={portfolioData[1].src} />
		</a>
		<a href={portfolioData[2].href}>
			<img src={portfolioData[2].src} />
		</a>
		<a href={portfolioData[3].href}>
			<img src={portfolioData[3].src} />
		</a>
		<a href={portfolioData[4].href}>
			<img src={portfolioData[4].src} />
		</a>
		<a href={portfolioData[5].href}>
			<img src={portfolioData[5].src} />
		</a>
		<a href={portfolioData[6].href}>
			<img src={portfolioData[6].src} />
		</a>
		</>
	);
}

console.log('PortfolioScrollItem', PortfolioScrollItem);

export default PortfolioScrollItem;