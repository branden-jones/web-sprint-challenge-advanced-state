// ❗ You don't need to add extra action creators to achieve MVP

import * as types from "./action-types"
import { useReducer } from "react";
import axios from "axios";


export function moveClockwise(num) {
  let payload = num + 1
  if (num + 1 === 6) {
    payload = 0;
    return { type: types.MOVE_CLOCKWISE, payload}
  };
  return { type: types.MOVE_CLOCKWISE, payload }
}

export function moveCounterClockwise(num) { 
  let payload = num - 1
  if (num === 0){ 
    payload = 5
    return { type: types.MOVE_COUNTERCLOCKWISE, payload}}
  return { type: types.MOVE_COUNTERCLOCKWISE, payload}
}



export function selectAnswer(props) {
  console.log(`creator`,props)
  let payload = props;
  if ( payload === null || payload === ''){
    payload = 'selected'
  }
  else { payload = ''}
    return {type: types.SET_SELECTED_ANSWER, payload}
  
  }


export function setMessage(message) {
  const payload = `${message}`;
  return { type: types.SET_INFO_MESSAGE, payload}
}

export function setQuiz(quiz) {
 if (!quiz) {
  return { type: types.SET_QUIZ_INTO_STATE, payload: quiz }
} else {
  const payload = {
    id: quiz.quiz_id,
    question: quiz.question,
    answers: quiz.answers
  } 
  return { type: types.SET_QUIZ_INTO_STATE, payload }
 } 
}


export function inputChange({name, value}) {
  const payload = { name, value };
  return { type: types.INPUT_CHANGE, payload}
 }

export function resetForm() {
  return {
    type: types.RESET_FORM,
  }
}
// 
// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch(setQuiz(null))
    axios.get(`http://localhost:9000/api/quiz/next`)
         .then((res) => {
         dispatch(setQuiz(res.data))})
         .catch((err) => 
          setMessage(err.response.data.message))
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state

  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
