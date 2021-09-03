import React from 'react';
import Story from './Story';

export default function StoryList({
	stories = []
}) {
	return (
		<div className="story-list">
			{
				stories.map(story => (
					<Story
						key={story.id}
						{...story}
					/>
			))}
		</div>
	);
}