import style from './FeedBack.module.css';
import React, { Component } from 'react';

export class FeedBack extends Component {
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button
            name="good"
            value={this.props.stat.good}
            className={style.btn}
            onClick={this.props.leaveFeedback}
          >
            Good
          </button>
          <button
            name="neutral"
            value={this.props.stat.neutral}
            className={style.btn}
            onClick={this.props.leaveFeedback}
          >
            Neutral
          </button>
          <button
            name="bad"
            value={this.props.stat.bad}
            className={style.btn}
            onClick={this.props.leaveFeedback}
          >
            Bad
          </button>
        </div>
      </div>
    );
  }
}
