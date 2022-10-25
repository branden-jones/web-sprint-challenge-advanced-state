import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { selectAnswer, postAnswer, fetchQuiz, setQuiz } from '../state/action-creators';

function Quiz(props) {
  const { quiz, selectAnswer, selectedAnswer, fetchQuiz, postAnswer } = props;

  useEffect(() => {
  if (!quiz){
    fetchQuiz()
  }
}, [quiz])

// step one... get quiz coming from axios... what is the request question and options....
// step two... map options... with key = optionId... if key = optionId... 'selected' : ''
  return (
    <div id="wrapper">
      {
        quiz ? (
                <>
                  <h2>{quiz.question}</h2>
                  <div id="quizAnswers">
                    {
                      quiz.answers.map((option) => (
                      <div 
                        key={option.answer_id}
                        className={`answer ${selectedAnswer === option.answer_id ? 'selected' : ''}`}
                      >
                        {option.text}
                        <button onClick={() => selectAnswer(option.answer_id)}>
                          {selectedAnswer === option.answer_id ? `SELECTED` : 
                          `Select`}
                        </button>
                      </div>
                      ))
                    }
                      {/* The "Submit answer" button in the quiz stays disabled until an answer is selected. */}
                    {selectedAnswer ? <button id="submitAnswerBtn" onClick={() => postAnswer(quiz.id, selectedAnswer)}>Submit answer</button> : <button>Submit answer</button>}
                  </div>
                </>
              ) : 'Loading next quiz...'
      }
    </div>
  )
}


export default connect(st => ({
  form: st.form,
  quiz: st.quiz,
  selectedAnswer: st.selectedAnswer
})
,{selectAnswer: selectAnswer, postAnswer: postAnswer, setQuiz: setQuiz, fetchQuiz: fetchQuiz})(Quiz);