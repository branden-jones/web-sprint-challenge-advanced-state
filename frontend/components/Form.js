import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators';

export function Form(props) {
  const { postQuiz, inputChange, newFalseAnswer, newQuestion, newTrueAnswer } = props

  const disabled = () => {
  if ( newFalseAnswer && newFalseAnswer.trim().length > 1 
    && newQuestion && newQuestion.trim().length > 1 
    && newTrueAnswer && newTrueAnswer.trim().length > 1 ) {
    return false
  }
    return true;
  }

  const onChange = evt => {
    evt.preventDefault();
    const name = evt.target.id;
    const value = evt.target.value;
    inputChange({ name, value })
  }

  const onSubmit = evt => {
    evt.preventDefault();
    postQuiz(newQuestion, newTrueAnswer, newFalseAnswer)
    
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} minLength={2} onChange={onChange} id="newQuestion" placeholder="Enter question" value={newQuestion} />

      <input maxLength={50} minLength={2} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={newTrueAnswer} />

      <input maxLength={50} minLength={2} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={newFalseAnswer} />
      {/* 
Submitting a new quiz successfully adds it to the roster of questions that cycle through the quiz screen.*/}
      <button
        id="submitNewQuizBtn"
        onClick={() => {onSubmit}}
        disabled={disabled()}
      >
        Submit new quiz
      </button>
    </form>
  )
}

export default connect(st => ({
  newQuestion: st.form.newQuestion,
  newTrueAnswer: st.form.newTrueAnswer,
  newFalseAnswer: st.form.newFalseAnswer
}), actionCreators)(Form)
