import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function contextReducer(state = initialState.context, action) {
  switch(action.type) {
    case types.LOAD_CONTEXT_SUCCESS:
      return action.context;

    default:
      return state;
  }
}
