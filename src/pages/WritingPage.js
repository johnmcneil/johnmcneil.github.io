import React from 'react';
import storyData from '../story-data.json';
import StoryList from '../components/StoryList';
import CommentForm from '../components/CommentForm';

const logComment = (comment) => {
	console.log("logComment fired");
	console.log(comment);
}

const WritingPage = (props) => (
	<>
		<CommentForm onComment={logComment} />
		<StoryList stories={storyData} />
	</>
);


export default WritingPage;