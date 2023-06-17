import { useState, useEffect } from "react";
import {nanoid} from "nanoid"

import './QuestionScreen.css'

import Question from "../Question/Question";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { Settings } from "../../Settings";
import useFetch from "../../hooks/useFetch";
import { getOpentdbURL } from "../../utils/getOpentdbURL";

interface Props{
  settings: Settings
}

const QuestionsScreen: React.FC <Props>  = ({ settings }) => {

  const [generateNewQuestions, setGenerateNewQuestions] = useState(true)

  const url = getOpentdbURL(settings)

  const {data, setData, isLoading, error} = useFetch(url)

  let questions;

  
  if(data){
    questions = data.results.map(qData => {
      let id = nanoid()
      return <Question key={id} questionData={qData}/>
    })
  }


  return(
    <>
    <NavBar />
      <main className="question-screen-container">
        <h2 className="question-screen-heading"> Test your skills </h2>
        
        {isLoading && <h2 className="question-screen-heading">Questions are being loaded</h2>}

        {questions}
      </main>
      <button type="button" className="btn btn-check-answers" /*onClick={handleClick}*/> New questions </button>
      <Link to='/settings'> 
        <button type="button" className="btn btn-check-answers" /*onClick={handleClick}*/> Settings </button> 
      </Link>
    </>
  )
}

export default QuestionsScreen