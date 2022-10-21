// ❗ You don't need to add extra action creators to achieve MVP

// ******    These are ACTIONS being Imported    ******

import * as types from "./action-types"

// these are CREATORS ******

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



export function selectAnswer() { }

export function setMessage() { }

export function setQuiz() { }

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
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
