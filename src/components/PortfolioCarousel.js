import React, { useState } from 'react';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption
} from 'reactstrap';

const items = [
	{
		src: "https://www.chessgraphs.com", 
		altText: "ChessGraphs.com",
		caption: "interactive visualization of chess ratings using d3.js"
	},
	{
		src: "https://www.johnmcneil.me", 
		altText: "johnmcneil.me",
		caption: "personal website featuring a custom WordPress theme."
	},
	{
		src: "https://www.kataymeloglu.com", 
		altText: "kataymeloglu.com",
		caption: "Artist portfolio website featuring a custom WordPress theme."
	}
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
				<iframe src={item.src} alt={item.altText} />
			</CarouselItem>		
		);
	});

	return (
		<Carousel
			activeIndex={activeIndex}
			next={next}
			previous={previous}
		>
			<CarouselIndicators className="bg-dark" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
			{slides}
			<CarouselControl className="text-dark" direction="prev" directionText="Previous" onClickHandler={previous} />
			<CarouselControl className="text-dark" direction="next" directionText="Next" onClickHandler={next} />
		</Carousel>
		);
}

export default PortfolioCarousel;