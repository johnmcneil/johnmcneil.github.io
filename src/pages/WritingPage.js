import React from 'react';
import storyData from '../story-data.json';
import StoryList from '../components/StoryList';
import FormSpreeForm from '../components/FormSpreeForm';

const logComment = (comment) => {
	console.log("logComment fired");
	console.log(comment);
}

const WritingPage = (props) => (
	<div className="container writing-page">
		<div className="row">
			<h1>Writing</h1>
			<p>I write flash science fiction. Follow a link and send me a comment if you like.</p>
			<StoryList stories={storyData} />
			<FormSpreeForm />
		</div>
	</div>
);


export default WritingPage;