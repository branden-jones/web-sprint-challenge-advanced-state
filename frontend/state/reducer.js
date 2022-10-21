// ❗ You don't need to add extra reducers to achieve MVP

// ********   REDUCER    ********

import { combineReducers } from 'redux';
import * as types from "./action-types";

export const initialWheelState = 0

function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case types.MOVE_CLOCKWISE:
      return action.payload
    case types.MOVE_COUNTERCLOCKWISE:
      return action.payload
      
    default:
      return state  
  }
      
}









const initialQuizState = null
function quiz(state = initialQuizState, action) {
  // switch (action.type) {
  //   case SET_QUIZ_INTO_STATE:
  //     return {
  //       ...state
  //     }
  //     default:
        return state
  // }
    
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form });
