import { combineReducers } from 'redux';
import player from './player_reducer';
import dataReducer from './dataReducer';
import timerReducer from './timerReducer';

const rootReducer = combineReducers({
  player,
  dataReducer,
  timerReducer,
});

export default rootReducer;
