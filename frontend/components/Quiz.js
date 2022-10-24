import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { selectAnswer, fetchQuiz, setQuiz } from '../state/action-creators';

function Quiz(props) {
console.log(`Quiz Props`,props)
  const { quiz, selectedAnswer, selectAnswer, fetchQuiz, setQuiz } = props

// useEffect(() => {
//   fetchQuiz()
// },[])


// step one... get quiz coming from axios... what is the request question and options....
// step two... map options... with key = optionId... if key = optionId... 'selected' : ''
  return (
    <div id="wrapper">
      {
        quiz ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className={`answer ${selectedAnswer}`}>
                A function
                <button onClick={() => selectAnswer(selectedAnswer)}>
                  {selectedAnswer ? `SELECTED` : `Select`}
                </button>
              </div>

              <div className={`answer ${selectedAnswer}`}>
                An elephant
                <button onClick={() => selectAnswer(selectedAnswer)}>
                {selectedAnswer ? `SELECTED` : `Select`}
                </button>
              </div>
            </div>
{/*  The "Submit answer" button in the quiz stays disabled until an answer is selected.*/}
            <button id="submitAnswerBtn" onClick={fetchQuiz()}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => 
  (console.log(st),{
  form: st.form,
  quiz: st.quiz,
  infoMessage: st.infoMessage,
  selectedAnswer: st.selectedAnswer
})
,{selectAnswer: selectAnswer, fetchQuiz: fetchQuiz, setQuiz: setQuiz})(Quiz);