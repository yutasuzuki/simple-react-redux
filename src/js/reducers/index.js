import { combineReducers } from 'redux'
import { AWESOME_EVENT, ASYNC_EVENT } from '../actions/'

const awesomeReducer = (state = false, action) => {
  switch (action.type) {
    case AWESOME_EVENT:
      return state = !state
      break;
    case ASYNC_EVENT:
      return state = false
    default:
      return state
  }
};

const reducers = combineReducers({
  awesome: awesomeReducer
});

export default reducers
