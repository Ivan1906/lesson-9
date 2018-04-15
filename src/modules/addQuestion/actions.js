import { addQuestionTypes } from './';

const requestQuestion = () => ({
    type: addQuestionTypes.REQUEST_QUESTION,
    isLoading: true
});

const receiveQuestion = () => ({
    type: addQuestionTypes.RECEIVE_QUESTION,
    isLoading: false
});

const fetchData = () => dispatch => {
    dispatch(requestQuestion());
    setTimeout(() => {
        return dispatch(receiveQuestion());
    }, 500);
}

const asyncQuestion = () => (dispatch) => {
    return dispatch(fetchData());
}

export default {
    requestQuestion,
    receiveQuestion,
    asyncQuestion
}