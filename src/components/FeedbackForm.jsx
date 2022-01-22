import React, { useState, useContext, useEffect } from "react";

import FeedbackContext from "../context/FeedbackContext";
import Button from "./shared/Button";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import FeedbackData from "../data/FeedbackData";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback, editFeedback, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (editFeedback.edit === true) {
      setBtnDisabled(false);
      setText(editFeedback.item.text);
      //      setRating(editFeedback.item.rating);
    }
  }, [editFeedback]);

  const onChangeHandler = (e) => {
    if (text == "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Feedback must be atleast 10 chracters!");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (editFeedback.edit === true) {
        updateFeedback(editFeedback.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write your review...'
            onChange={onChangeHandler}
            value={text}
          />
          <Button type='submit' version='primary' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
