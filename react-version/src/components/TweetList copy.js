import React from 'react'; //optional
import nlhLi3I from '../assets/nlhLi3I.png';
import n73hZDYK from '../assets/n73hZDYK.png';
import tweet from '../components/Tweet';

function TweetList() {

  const tweet = this.tweet();
  
  return (
    <section className="tweets">
    

      <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src={nlhLi3I} alt="avatar1" />
            <h2 className="tweet--name">Newton</h2>
            <small className="tweet--handle">@SirIsaac</small>
        </header>

        <div className="tweet--body">
          <p>If I have seen further it is by standing on the shoulders of giants</p>
        </div>

        <footer className="tweet--footer">
          <small className="footer--age">10 days ago<small>
            <span className="footer--actions">
              <a href="#"><i className="fa fa-flag"></i></a>
              <a href="#"><i className="fa fa-retweet"></i></a>
              <a href="#"><i className="fa fa-heart"></i></a>'
            </span>
          </small></small>
        </footer>
      </article>

      <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src={n73hZDYK} alt="avatar2" />
            <h2 className="tweet--name">Descartes</h2>
            <small className="tweet--handle">@rd</small>
        </header>

        <div className="tweet--body">
          <p>Je pense , donc je suis</p>
        </div>

        <footer className="tweet--footer">
          <small className="footer--age">10 days ago<small>
            <span className="footer--actions">
              <a href="#"><i className="fa fa-flag"></i></a>
              <a href="#"><i className="fa fa-retweet"></i></a>
              <a href="#"><i className="fa fa-heart"></i></a>'
            </span>
          </small></small>
        </footer>
      </article>
    </section>
  );
}

export default TweetList;