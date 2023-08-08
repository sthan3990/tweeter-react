import React from 'react'; //optional
import Tweet from '../components/Tweet';

function TweetList(props) {

  return (
    <section className="tweets">
    
    <Tweet />

    <Tweet />

    </section>
  );
}

export default TweetList;