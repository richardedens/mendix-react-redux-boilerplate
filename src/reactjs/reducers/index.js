import {combineReducers} from 'redux';
import context from './contextReducer';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  context,
  courses,
  authors
});

export default rootReducer;
