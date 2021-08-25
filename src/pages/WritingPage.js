import React from 'react';
import storyData from '../story-data.json';
import StoryList from '../components/StoryList';
import FormSpreeForm from '../components/FormSpreeForm';

const logComment = (comment) => {
	console.log("logComment fired");
	console.log(comment);
}

const WritingPage = (props) => (
	<div className="container">
		<div className="row">
			<h1>Writing</h1>
			<p>Some of my flash science fiction has been published online. You can follow a link and send me a comment if you want.</p>
			<StoryList stories={storyData} />
			<FormSpreeForm />
		</div>
	</div>
);


export default WritingPage;