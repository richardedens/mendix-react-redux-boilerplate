import * as types from './actionTypes';
import contextApi from '../api/mock/contextApi';

/* List */
export function loadContextSuccess(context) {
  return { type: types.LOAD_CONTEXT_SUCCESS, context };
}

export function loadContext() {
  return function(dispatch) {
    return contextApi.getContext().then(context => {
      dispatch(loadContextSuccess(context));
    }).catch(error => {
      throw(error);
    });
  };
}
