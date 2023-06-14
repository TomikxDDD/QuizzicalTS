import './Answer.css'

interface Props{
  text: string
}

const Answer: React.FC<Props> = ({ text }) => {
  return ( 
    <p className='answer'> {text} </p>
  )
}
 
export default Answer;