import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { selectAnswer, fetchQuiz, setQuiz } from '../state/action-creators';

function Quiz(props) {
console.log(`Quiz Props`,props)
  const { quiz, selectedAnswer, selectAnswer, fetchQuiz } = props;

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
                      quiz.answers.map((option, idx) => (
                      <div 
                        key={option.answer_id}
                        className={`answer ${quiz.answers[idx].answer_id === option.answer_id ? 'selected' : ''}`}
                      >{console.log(option.answer_id, quiz.answers[idx].answer_id)}
                        {option.text}
                        <button onClick={() => selectAnswer(quiz.answers.answer_id)}>
                          {selectedAnswer ? `SELECTED` : 
                          `Select`}
                        </button>
                      </div>
                      ))
                    }
                      {/* The "Submit answer" button in the quiz stays disabled until an answer is selected. */}
                    <button id="submitAnswerBtn" onClick={() => fetchQuiz()}>Submit answer</button>
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
  infoMessage: st.infoMessage,
  selectedAnswer: st.selectedAnswer
})
,{selectAnswer: selectAnswer, fetchQuiz:fetchQuiz, setQuiz: setQuiz})(Quiz);