import { Link } from 'react-router-dom';
import './WelcomeScreen.css'

interface Props{

}

const WelcomeScreen: React.FC<Props> = ({  }) => {
  return ( 
    <>
      <h2 className={"welcome-screen-h2"}> Quizzical </h2>
      <p className="welcome-screen-p">Test your skills</p>
      <Link to='/questions'>
        <button type='button' className="btn start-quiz-button" >Start quiz! </button>
      </Link>
    </>
   );
}
 
export default WelcomeScreen;