import React, { Component } from 'react';

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.props.stat;

    return (
      <div>
        {good === 0 && neutral === 0 && bad === 0 ? (
          <p>There is no feedback</p>
        ) : (
          <div>
            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positiveFeedback}%</p>{' '}
          </div>
        )}
      </div>
    );
  }
}
