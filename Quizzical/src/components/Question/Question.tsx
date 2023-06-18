import { useState, useEffect } from 'react';
import Answer from '../Answer/Answer';
import './Question.css'
import {nanoid} from "nanoid"
import { decodeTextFromAPI } from '../../utils/decodeTextFromAPI';
import { shuffleArray } from '../../utils/shuffleArray';
import { Category, Difficulty } from '../../Settings';

interface QuestionData{
  category: string,
  correct_answer: string 
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export interface IAnswer{
  id: string
  text: string,
  selected: boolean,
  correct: boolean
}

interface Props{
  questionData: QuestionData
}

const Question: React.FC <Props> = ({ questionData }) => {

  const [answers, setAnswers] = useState([])



  useEffect(() => {
    const correctAnswer: IAnswer = {
      id: nanoid(),
      text: questionData.correct_answer,
      selected: false,
      correct: true
    }
    
    const incorrectAnswers: IAnswer[] = questionData.incorrect_answers.map(incAns => {
      return {
        id: nanoid(),
        text: incAns,
        selected: false,
        correct: false
      }
    })

    let initAnswers: IAnswer[] = [correctAnswer, ...incorrectAnswers]
    initAnswers = shuffleArray(initAnswers)
    setAnswers(initAnswers)

  }, [questionData])

  function handleSelect(id: string): void {
    console.log("Question: handle selected triggered. ID: ", id)
    setAnswers(oldAnswers => oldAnswers.map(ans => {
      if (ans.id === id){
        return {
          ...ans,
          selected: true
        }
      } else {
        return {
          ...ans,
          selected: false
        }
      }
      }
    ))
  }


  const answersToRender = answers.map(ans => {
    return <Answer 
      key={ans.id}
      id={ans.id}
      text={ans.text}
      selected={ans.selected}
      correct={ans.correct}
      handleSelect={handleSelect} />
  })    
    
  const decodedQuestion: string = decodeTextFromAPI(questionData.question)

  return ( 
    <section className="question-container">
    <h2 className="question-text"> {decodedQuestion} </h2>
    <div className="batches">
      <span className='batch-question question-category'>Category - {questionData.category}</span> 
      <span className='batch-question question-difficulty'>Difficulty - {questionData.difficulty}</span>
    </div>
    <div className="answers-container">
      {answersToRender}
    </div>
    <div className="question-separator">
    </div>
  </section>
   );
}
 
export default Question;