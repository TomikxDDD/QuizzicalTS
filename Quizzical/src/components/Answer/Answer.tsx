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

  
  const classNameSelected: string = selected ? 'answer-selected' : ''
  
  const className: string = 'answer' + ' ' + classNameSelected 
  
  console.log("Answer: Id: ", id, 'class name: ', className)
  return ( 
    <p onClick={() => handleSelect(id)} className={className}> {text} </p>
  )
}
 
export default Answer;