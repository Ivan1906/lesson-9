import { combineReducers } from 'redux';

import user from './user';
import search from './search';
import sort from './sort';
import answerSort from './answerSort';
import addQuestion from './addQuestion';

export default combineReducers({
  user,
  search,
  sort,
  answerSort,
  addQuestion,
});
