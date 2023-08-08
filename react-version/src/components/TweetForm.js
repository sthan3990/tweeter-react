import React from 'react'; //optional

function TweetForm() {

  return (
    <section className="newtweet">
      <form
        method="post"
        action="/tweets"
        onClick={(event) => event.preventDefault()} className="newtweet__form"
      >
        <textarea className="form__textarea"
          name="text"
          placeholder="What are you humming about?">
        </textarea>
        <input
          type="submit"
          value="Tweet"
          className="form__input"
          onClick={(event) => event.preventDefault()}
        />
        <span className="form__counter">140</span>
      </form>
    </section>

  );


}

export default TweetForm;