import Statistics from './Statistics/Statistics';
import { FeedBack } from './FeedBack/FeedBack';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  addGood = () => {
    this.setState({
      good: this.state.good + 1,
    });
    this.total();
    this.positiveFeedback();
  };

  addNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
    this.total();
    this.positiveFeedback();
  };

  addBad = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
    this.total();
    this.positiveFeedback();
  };

  total = () => {
    this.setState({
      total: Math.round(this.state.good + this.state.neutral + this.state.bad),
    });
  };

  positiveFeedback = () => {
    if (this.state.good === 0) {
      return;
    }
    this.setState({
      positiveFeedback: Math.round(
        (this.state.good /
          (this.state.good + this.state.neutral + this.state.bad)) *
          100
      ),
    });
  };

  render() {
    return (
      <div className='container'>
        <FeedBack
          stat={this.state}
          clickGood={this.addGood}
          clickNeutral={this.addNeutral}
          clickBad={this.addBad}
          total={this.total}
          positiveFeedback={this.positiveFeedback}
        />
        <Statistics stat={this.state} />
      </div>
    );
  }
}
