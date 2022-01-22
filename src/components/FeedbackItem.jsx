import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";

import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";

function FeedbackItem({ item }) {
  const { deleteFeedback, feedbackEdit } = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button className='edit'>
        <FaEdit
          color='purple'
          onClick={() => {
            feedbackEdit(item);
          }}
        />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
