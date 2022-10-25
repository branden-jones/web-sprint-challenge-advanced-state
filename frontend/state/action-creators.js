import * as types from "./action-types"
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
  const payload = props;
  return {type: types.SET_SELECTED_ANSWER, payload}
  
  }

export function setMessage(message) {
  let payload = message;
  return { type: types.SET_INFO_MESSAGE, payload}
}

export function setQuiz(quiz) {
 if (!quiz) {
  return { type: types.SET_QUIZ_INTO_STATE, payload: quiz }
} else {
  const payload = {
    id: quiz.quiz_id,
    question: quiz.question,
    answers: quiz.answers,
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
    type: types.RESET_FORM
  }
}

export function fetchQuiz() {
  return function (dispatch) {
    dispatch(setQuiz(null))
    axios.get(`http://localhost:9000/api/quiz/next`)
         .then((res) => {
          dispatch(setQuiz(res.data))})
         .catch((err) => 
          dispatch(setMessage(err.response.data.message)))
  }
}

export function postAnswer(quiz_id, answer_id) {
  return function (dispatch) {
    axios.post(`http://localhost:9000/api/quiz/answer`,{"quiz_id": `${quiz_id}`, "answer_id": `${answer_id}`})
         .then((res) => {
          dispatch(selectAnswer(null))
          dispatch(setMessage(res.data.message))
          dispatch(fetchQuiz())
         })
         .catch((err) => 
          dispatch(setMessage(err.response.request.statusText)))
  }
}

export function postQuiz(str1,str2,str3) {

  return function (dispatch) {
    axios.post(`http://localhost:9000/api/quiz/new`,{ question_text: str1, true_answer_text: str2, false_answer_text: str3 })
         .then((res) => {
          dispatch(resetForm())
          dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`))
        })
         .catch((err) => 
            dispatch(setMessage(err.message)))
  }
}

