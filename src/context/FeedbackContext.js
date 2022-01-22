import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Best expereince",
      rating: 10,
    },
    {
      id: 2,
      text: "Best expereince",
      rating: 7,
    },
    {
      id: 3,
      text: "Best expereince",
      rating: 8,
    },
  ]);

  const [editFeedback, setEditfeedback] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const feedbackEdit = (item) => {
    setEditfeedback({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, upditem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...upditem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editFeedback,
        deleteFeedback,
        addFeedback,
        feedbackEdit,
        updateFeedback,
      }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
