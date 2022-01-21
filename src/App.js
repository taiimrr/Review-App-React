import React from "react";
import ReactDOM from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <Router>
      <Header />
      <div className='container'>
        <Route path='/' exact>
          <FeedbackForm addFeedback={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={handleDelete} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
