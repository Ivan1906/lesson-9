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
    return fetch('http://localhost:3000/posts')
        .then(request => dispatch(receiveQuestion()));
}

const asyncQuestion = () => (dispatch) => {
    return dispatch(fetchData());
}

export default {
    requestQuestion,
    receiveQuestion,
    asyncQuestion
}