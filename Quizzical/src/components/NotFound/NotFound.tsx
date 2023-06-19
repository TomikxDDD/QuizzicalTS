import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return ( 
    <>
      <h1 className="not-found-title">404 Not Found</h1>
      <p className="not-found-message">Oops! Looks like you're lost in the quiz jungle.</p>
      <p className="not-found-hint">Answering questions is more fun than wandering here!</p>
      <Link to="/" className="not-found-link">Go back to homepage</Link>
    </>
   );
}
 
export default NotFound;