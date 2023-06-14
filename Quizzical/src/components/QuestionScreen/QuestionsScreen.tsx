import { useState, useEffect } from "react";
import {nanoid} from "nanoid"

import './QuestionScreen.css'

import Question from "../Question/Question";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

function QuestionsScreen(){

  // const [data, setData] = useState();
  
  // const [newQuestions, setNewQuestions] = useState(true)

  // const [questions, setQuestions] = useState([])

  // const handleClick = () => {
  //   setNewQuestions(true)
  // }

  // /* Calling open trivia database API */
  // useEffect(() => {
  //   if (newQuestions){
  //     fetch("https://opentdb.com/api.php?amount=5")
  //       .then(res => res.json())
  //       .then(data => setData(data))
  //   }
  //   setNewQuestions(false)
  // }, [newQuestions])

  // useEffect(() => {
  //   if(data){
  //     setQuestions(data.results.map(qData => {
  //       let id = nanoid()
  //       return <Question key={id} questionData={qData}/>
  //     }))
  // }
  // }, [data])

  return(
    <>
    <NavBar />
      <main className="question-screen-container">
        <h2 className="question-screen-heading"> Test your skills </h2>
        {/* {questions && questions}  */}
        <Question key={1} questionTxt="Question 1"/>
        <Question key={2} questionTxt="Question 2"/>
        <Question key={3} questionTxt="Question 3"/>
        <Question key={4} questionTxt="Question 4"/>
        <Question key={5} questionTxt="Question 5"/>
      </main>
      <button type="button" className="btn btn-check-answers" /*onClick={handleClick}*/> New questions </button>
      <Link to='/options'> 
        <button type="button" className="btn btn-check-answers" /*onClick={handleClick}*/> Settings </button> 
      </Link>
    </>
  )
}

export default QuestionsScreen