import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { decreaseTimer, stopTimer } from '../redux/actions/index.actions';

class Timer extends Component {
  componentDidMount() {
    this.decreaseTime();
  }

  componentDidUpdate() {
    const { time, dispatch } = this.props;
    console.log(time);
    if (time === 0) {
      clearInterval(this.intervalId);
      dispatch(stopTimer());
      console.log('entrando if');
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  decreaseTime = () => {
    const { dispatch, time, interval } = this.props;
    console.log(time);
    this.intervalId = setInterval(() => {
      if (time > 0) {
        dispatch(decreaseTimer());
        console.log('entrando if2');
      }
    }, interval);
  };

  render() {
    const { time } = this.props;
    return (
      <div>
        <h4>{`Tempo: ${time}`}</h4>
      </div>
    );
  }
}

Timer.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  questions: state.dataReducer.questions,
  time: state.timerReducer.time,
  interval: state.timerReducer.interval,
});

export default connect(mapStateToProps)(Timer);
