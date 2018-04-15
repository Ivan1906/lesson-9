import { addQuestionTypes } from './';

const defaultState = '';

export default (state = defaultState, action) => {
  switch (action.type) {
    case addQuestionTypes.REQUEST_QUESTION:
      console.log(action);
      return action.isLoading;
    case addQuestionTypes.RECEIVE_QUESTION:
      console.log(action);
      return action.isLoading;
    default:
      return state;
  }
};