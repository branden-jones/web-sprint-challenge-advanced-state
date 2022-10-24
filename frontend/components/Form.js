import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  const { form, infoMessage } = props
  // console.log(`form props`, props)

  const onChange = evt => {
    const name = evt.target.id;
    const value = evt.target.value;
    actionCreators.inputChange({ name, value })
  }

  const onSubmit = evt => {
    console.log(evt.target.value)
    console.log(evt.target)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      {/*  The "Submit new quiz" button in the form stays disabled until all inputs have values such that value.trim().length > 0.
Submitting a new quiz successfully adds it to the roster of questions that cycle through the quiz screen.*/}
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
