import { Link } from 'react-router-dom';
import { ChangeEvent } from 'react'
import './SettingsScreen.css'
import { Settings, Category, Difficulty, questionType } from '../../Settings';


interface Props{
  settings: Settings
  setSettings: Function,
  resetSettings: Function
}

const SettingsScreen: React.FC<Props> = ({ settings, setSettings, resetSettings }) => {

  const minNumOfQuestions = 3;
  const maxNumOfQuestions = 10;
  
 
  function handleChange (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, parameterToChange: string){
    setSettings((oldSettings: Settings) => {
      let newSettings = {...oldSettings}
      switch (parameterToChange){
        case 'numOfQuestions':{
          newSettings = {
            ...oldSettings,
            numOfQuestions: parseInt(e.target.value, 10)
          }
          break;
        }
        case 'category':{
          newSettings = {
            ...oldSettings,
            category: e.target.value as Category
          }
          break;
        }
        case 'difficulty':{
          newSettings = {
            ...oldSettings,
            difficulty: e.target.value as Difficulty
          }
          break;
        }
        case 'type':{
          newSettings = {
            ...oldSettings,
            type: e.target.value as questionType
          }
          break;
        }
      }
      
      return newSettings
    })
  }

  function handleReset (): void {
    resetSettings()
  }
  
  return ( 
    <>
      <h2 className='settings__h2'>Settings</h2>
      <form className='settings-form'>
        <div className="settings-form-row">
          <label htmlFor="num-of-questions">Number of questions: </label>
          <input 
            id='num-of-questions' 
            type="number" 
            min={minNumOfQuestions} 
            max={maxNumOfQuestions} 
            title={`Min value: ${minNumOfQuestions}; Max value: ${maxNumOfQuestions}`}
            value={settings.numOfQuestions}
            onChange={(e) => handleChange(e, 'numOfQuestions')} />
        </div>
        <div className="settings-form-row">
          <label htmlFor="category">Category of questions: </label>
          <select 
            name="questions-type" 
            id="type" 
            value={settings.category}
            onChange={(e) => handleChange(e, 'category')}>

            <option value={Category.ANY}>Any category</option>
            <option value={Category.GENERAL_KNOWLEDGE}>General knowledge</option>
            <option value={Category.ENTERTAINMENT_BOOKS}>Entertainment: Books</option>
            <option value={Category.ENTERTAINMENT_MUSIC}>Entertainment: Music</option>
            <option value={Category.ENTERTAINMENT_MUSICALS_THEATRES}>Entertainment: Musical & Theaters</option>
            <option value={Category.ENTERTAINMENT_TELEVISION}>Entertainment: Television</option>
            <option value={Category.ENTERTAINMENT_VIDEO_GAMES}>Entertainment: Video games</option>
            <option value={Category.ENTERTAINMENT_BOARD_GAMES}>Entertainment: Board games</option>
            <option value={Category.ENTERTAINMENT_COMICS}>Entertainment: Comics</option>
            <option value={Category.ENTERTAINMENT_JAPANESE_ANIME_MANGA}>Entertainment: Japanese Anime & Manga</option>
            <option value={Category.ENTERTAINMENT_CARTOON_ANIMATIONS}>Entertainment: Cartoon & Animation</option>
            <option value={Category.SCIENCE_NATURE}>Science: Nature</option>
            <option value={Category.SCIENCE_COMPUTERS}>Science: Computers</option>
            <option value={Category.SCIENCE_MATHEMATICS}>Science: Mathematics</option>
            <option value={Category.SCIENCE_GADGETS}>Science: Nature</option>
            <option value={Category.SCIENCE_NATURE}>Science: Nature</option>
            <option value={Category.MYTHODOLOGY}>Mythodology</option>
            <option value={Category.SPORTS}>Sports</option>
            <option value={Category.GEOGRAPHY}>Geography</option>
            <option value={Category.HISTORY}>History</option>
            <option value={Category.POLITICS}>Politics</option>
            <option value={Category.ART}>Art</option>
            <option value={Category.CELEBRITIES}>Celebrities</option>
            <option value={Category.ANIMALS}>Animals</option>
            <option value={Category.VEHICLES}>Vehicles</option>
          </select>
        </div>
        <div className="settings-form-row">
          <label htmlFor="difficulty">Difficulty of questions: </label>
          <select 
            name="questions-type" 
            id="type" 
            value={settings.difficulty}
            onChange={(e) => handleChange(e, 'difficulty')}>

            <option value={Difficulty.ANY}>Any difficulty</option>
            <option value={Difficulty.EASY}>Easy</option>
            <option value={Difficulty.MEDIUM}>Medium</option>
            <option value={Difficulty.HARD}>Hard</option>
          </select>
        </div>
        <div className="settings-form-row">
          <label htmlFor="type">Type of questions: </label>
          <select 
            name="questions-type" 
            id="type"
            value={settings.type}
            onChange={(e) => handleChange(e, 'type')}>

            <option value={questionType.ANY}>Any type</option>
            <option value={questionType.MULTIPLE}>Multiple choice</option>
            <option value={questionType.BOOLEAN}>True / False</option>
          </select>
        </div>
      </form>
      <button 
        className="btn btn-reset"
        onClick={handleReset}> Reset to default values </button>
      <Link to='/questions'> 
        <button className="btn btn-settings"> Save and return </button>
      </Link>
    </>
   );
  }
 
  export default SettingsScreen;