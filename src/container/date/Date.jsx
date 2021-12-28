import React from "react";
import "./date.css";
import Clock from "../../components/countdown/Countdown";
import jingleBell from "../../assets/jingleBell.png";
import { Component } from "react/cjs/react.development";

class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "January 01, 2022",
    };
  }
  render() {
    return (
      <div className="date " id="date">
        <div className="data-title-section">
          <img className="shake-lr" src={jingleBell} alt="jingle bell" />
          <div className="date-title">
            <h2>Christmas Countdown</h2>
          </div>
          <img className="shake-lr" src={jingleBell} alt="jingle bell" />
        </div>
        <div className="date-bar-container">
          <div className="date-bar"></div>
        </div>
        <div className="date-countdown section-padding">
          {this.state.deadline}
        </div>
        <Clock deadline={this.state.deadline} />
      </div>
    );
  }
}

export default Date;
