import { decodeTextFromAPI } from '../../utils/decodeTextFromAPI'
import './Answer.css'

interface Props{
  id: string
  text: string
  selected: boolean
  correct: boolean
  handleSelect: Function
}

const Answer: React.FC<Props> = (
  { 
    id, 
    text, 
    selected, 
    correct, 
    handleSelect 
  }
) => {

  let classNameCorrect: string
  if (selected && correct){
    classNameCorrect = 'answer-correct'
  } else if (selected && !correct){
    classNameCorrect = 'answer-incorrect'
  } else {
    classNameCorrect = ''
  }

  
  const className: string = 'answer' + ' ' + classNameCorrect 

  const decodedAnswer: string = decodeTextFromAPI(text)
  
  return ( 
    <p onClick={() => handleSelect(id)} className={className}> {decodedAnswer} </p>
  )
}
 
export default Answer;