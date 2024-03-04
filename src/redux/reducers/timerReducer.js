import { DECREASE_TIMER, STOP_TIMER } from '../actions/index.actions';

const INITIAL_STATE = {
  time: 30,
  interval: 1000,
  isDisabled: false,
};

const timerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case DECREASE_TIMER: {
    return {
      ...state,
      time: state.time - 1,
    };
  }
  case STOP_TIMER: {
    return {
      ...state,
      isDisabled: true,
      time: 0,
      interval: 0,
    };
  }

  default: return state;
  }
};

export default timerReducer;
