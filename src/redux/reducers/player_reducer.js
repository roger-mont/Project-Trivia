import { SEND_EMAIL, SAVE_CORRECT_ANSWER } from '../actions/index.actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  totalScore: 0,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_EMAIL: {
    return {
      ...state,
      gravatarEmail: action.payload.email,
      name: action.payload.name,
    };
  }
  case SAVE_CORRECT_ANSWER: {
    return {
      ...state,
      score: state.score + action.payload.score,
      assertions: state.assertions + action.payload.assertions,
    };
  }

  default: return state;
  }
};

export default player;
