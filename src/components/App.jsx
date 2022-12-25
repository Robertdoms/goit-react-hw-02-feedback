import React, { Component } from 'react';
import FeedbackSection from './Section/Section';
import Feedback from '../components/FeedbackOptions/FeedbackOptions';
import Statistic from '../components/Statistics/Statistics';
import Notification from '../components/Statistics/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtn = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value);
}

export default App;
