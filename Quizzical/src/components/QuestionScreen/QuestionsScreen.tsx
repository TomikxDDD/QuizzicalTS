import { useState } from "react";
import {nanoid} from "nanoid"

import './QuestionScreen.css'

import Question from "../Question/Question";
import { Link } from "react-router-dom";
import { Settings } from "../../Settings";
import useFetch from "../../hooks/useFetch";
import { getOpentdbURL } from "../../utils/getOpentdbURL";

interface Props{
  settings: Settings
}

const QuestionsScreen: React.FC <Props>  = ({ settings }) => {


  const url = getOpentdbURL(settings)

  const [urlKey, setUrlKey] = useState(Date.now().toString());

  const {data, setData, isLoading, error} = useFetch(url, urlKey)
  
  function handleNewQuestions(){
    setData(null)
    setUrlKey(Date.now().toString()); // Update the urlKey to trigger re-render and re-fetch
  }

  let questions;

  if(data){
    questions = data.results.map(qData => {
      let id = nanoid()
      return <Question key={id} questionData={qData}/>
    })
  }


  return(
    <>
      <main className="question-screen-container">
        <h2 className="question-screen-heading"> Test your skills </h2>
        <div className="questions">
          {isLoading && <h2 className="question-screen-heading">Questions are being loaded</h2>}
          {error && <h2 className="question-screen-heading">{error}</h2>}

          {!isLoading && !error && questions}
        </div>
      </main>
      <button type="button" className="btn btn-check-answers" onClick={handleNewQuestions}> New questions </button>
      <Link to='/settings'> 
        <button type="button" className="btn btn-check-answers" /*onClick={handleClick}*/> Settings </button> 
      </Link>
    </>
  )
}

export default QuestionsScreen