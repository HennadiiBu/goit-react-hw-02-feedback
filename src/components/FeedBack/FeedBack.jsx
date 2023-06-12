import style from './FeedBack.module.css';
import React, { Component } from 'react';

export class FeedBack extends Component {

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button className={style.btn} onClick={this.props.clickGood}>Good</button>
          <button className={style.btn} onClick={this.props.clickNeutral}>Neutral</button>
          <button className={style.btn} onClick={this.props.clickBad}>Bad</button>
        </div>
      </div>
    );
  }
}
