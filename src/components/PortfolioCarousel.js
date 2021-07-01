import React, { useState } from 'react';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,
	UncontrolledCarousel
} from 'reactstrap';
import $ from 'jquery';
import chessgraphs from '../img/chessgraphs.png';
import johnmcneilme from '../img/johnmcneilme.png';
import kataymeloglu from '../img/kataymeloglu.png';
import mn350 from '../img/mn350.png';
import mn350action from '../img/mn350action.png';
import github from '../img/github.png';
import qomb from '../img/qomb.png';
import federalcourt from '../img/federalcourt-screenshot.png';

const items = [
	{
		src: chessgraphs, 
		altText: "ChessGraphs.com",
		caption: "interactive visualization of chess ratings using d3.js"
	},
	{
		src: johnmcneilme, 
		altText: "johnmcneil.me",
		caption: "personal website featuring a custom WordPress theme."
	},
	{
		src: kataymeloglu, 
		altText: "kataymeloglu.com",
		caption: "Artist portfolio website featuring a custom WordPress theme."
	},
	{
		src: mn350, 
		altText: "mn350.org",
		caption: "WordPress site maintenance, theme development and content management"
	},
	{
		src: mn350action, 
		altText: "mn350action.org",
		caption: "WordPress site maintenance, theme development and content management"
	},
	{
		src: federalcourt, 
		altText: "federalcourtreportersllc",
		caption: "WordPress theme development and domain name registration and hosting"
	},
	{
		src: github, 
		altText: "github.com/johnmcneil",
		caption: "open source projects on github.com"
	},
	{
		src: qomb, 
		altText: "Quodlibet of Messmore Breamworthy",
		caption: "light-weight PHP content management with a Bootstrap front-end"
	},
];

const PortfolioCarousel = (props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	}

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	}

	const goToIndex = (newIndex) => {
		if(animating) return;
		setActiveIndex(newIndex);
	}

	const slides = items.map((item) => {
		return (
			<CarouselItem
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={item.src}
			>
				<img src={item.src} alt={item.altText} />
			</CarouselItem>		
		);
	});

	return (
		<Carousel
			id="portfolio-carousel"
			data-ride="carousel"
			activeIndex={activeIndex}
			next={next}
			previous={previous}
		>
			<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
		     {slides}
		</Carousel>
		);

}

export default PortfolioCarousel;