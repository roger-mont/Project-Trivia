import { SEND_QUESTIONS, IS_VISIBLE } from '../actions/index.actions';

const INITIAL_STATE = {
  questions: [],
  isVisible: false,
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_QUESTIONS:
    return {
      ...state,
      questions: action.payload,
    };
  case IS_VISIBLE:
    return {
      ...state,
      isVisible: action.payload,
    };
  default: return state;
  }
};

export default dataReducer;
