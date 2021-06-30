import React from 'react';
import PortfolioCarousel from '../components/PortfolioCarousel';
import ReactWordcloud from 'react-wordcloud';

const words = [
	{
		text: 'HTML',
		value: '40',
	},
	{
		text: 'CSS',
		value: '40',
	},
	{
		text: 'JavaScript',
		value: '40',
	},
	{
		text: 'WordPress',
		value: '40',
	},
	{
		text: 'jQuery',
		value: '40',
	},
	{
		text: 'd3.js',
		value: '40',
	},
	{
		text: 'Bootstrap',
		value: '40',
	},
	{
		text: 'PHP',
		value: '40',
	},
	{
		text: 'Python',
		value: '40',
	},
	{
		text: 'R',
		value: '40',
	},
	{
		text: 'MySQL',
		value: '40',
	},
	{
		text: 'Node.js',
		value: '40',
	},
];

const SimpleWordcloud = function SimpleWordcloud() {
	return <ReactWordcloud words={words} />
}

const HomePage = () => (
	<>
		<SimpleWordcloud />
      	<PortfolioCarousel />
	</>
);

export default HomePage;