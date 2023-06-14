import Answer from '../Answer/Answer';
import './Question.css'

interface Props{
  questionTxt: string
}

const Question: React.FC <Props> = ({ questionTxt }) => {


  

  return ( 
    <section className="question-container">
    <h2 className="question-text"> {questionTxt} </h2>
    <div className="answers-container">
      <Answer text='Option 1'/>
      <Answer text='Option 2'/>
      <Answer text='Option 3'/>
      <Answer text='Option 4'/>
    </div>
    <div className="question-separator">
    </div>
</section>
   );
}
 
export default Question;