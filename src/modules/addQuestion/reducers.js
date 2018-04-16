import { addQuestionTypes } from './';

const defaultState = '';

export default (state = defaultState, action) => {
  switch (action.type) {
    case addQuestionTypes.REQUEST_QUESTION:
      return action.isLoading;
    case addQuestionTypes.RECEIVE_QUESTION:
      return action.isLoading;
    default:
      return state;
  }
};