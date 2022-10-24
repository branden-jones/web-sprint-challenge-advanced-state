import React from 'react'
import { connect } from 'react-redux'

function Quiz(props) {
  console.log(`quiz props`, props)
  const { quiz, message, selected } = props
  return (
    <div id="wrapper">
      {
        quiz ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => ({
  quiz: st.quiz,
  message: st.infoMessage,
  selected: st.selectedAnswer
}), {})(Quiz);