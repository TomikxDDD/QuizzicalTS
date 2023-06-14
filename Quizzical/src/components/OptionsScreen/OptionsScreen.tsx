import { Link } from 'react-router-dom';
import { useState, ChangeEvent } from 'react'
import './OptionsScreen.css'

enum Category{
  'ANY' = '',
  'GENERAL_KNOWLEDGE'= 9,
  'ENTERTAINMENT_BOOKS',
  'ENTERTAINMENT_FILM',
  'ENTERTAINMENT_MUSIC',
  'ENTERTAINMENT_MUSICALS_THEATRES',
  'ENTERTAINMENT_TELEVISION',
  'ENTERTAINMENT_VIDEO_GAMES',
  'ENTERTAINMENT_BOARD_GAMES',
  'SCIENCE_NATURE',
  'SCIENCE_COMPUTERS',
  'SCIENCE_MATHEMATICS',
  'MYTHODOLOGY',
  'SPORTS',
  'GEOGRAPHY',
  'HISTORY',
  'POLITICS',
  'ART',
  'CELEBRITIES',
  'ANIMALS',
  'VEHICLES',
  'ENTERTAINMENT_COMICS',
  'SCIENCE_GADGETS',
  'ENTERTAINMENT_JAPANESE_ANIME_MANGA',
  'ENTERTAINMENT_CARTOON_ANIMATIONS',
}

enum Difficulty{
  'ANY' = '',
  'EASY' = 'easy',
  'MEDIUM' = 'medium',
  'HARD' = 'hard'
}

enum questionType{
  'ANY' = '',
  'MULTIPLE' = 'multiple',
  'BOOLEAN' = 'boolean'
}

interface Settings{
  numOfQuestions: number,
  category: Category,
  difficulty: Difficulty,
  type: questionType
}

const initialSettings: Settings = {
  numOfQuestions: 5,
  category: Category.ANY,
  difficulty: Difficulty.ANY,
  type: questionType.ANY
}

interface Props{

}

const OptionsScreen: React.FC<Props> = ({  }) => {

  const [settings, setSettings] = useState(initialSettings)

  function handleChange (e: ChangeEvent, parameterToChange: string){
    setSettings(oldSettings => {
      let newSettings = {...oldSettings}
      switch (parameterToChange){
        case 'numOfQuestions':{
          newSettings = {
            ...oldSettings,
            numOfQuestions: parseInt(e.target.value, 10)
          }
        }
        case 'category':{
          console.log(e.target.value)
          newSettings = {
            ...oldSettings,
            category: e.target.value
          }
        }
        case 'difficulty':{
          console.log(e.target.value)
          newSettings = {
            ...oldSettings,
            difficulty: e.target.value
          }
        }
        case 'type':{
          console.log(e.target.value)
          newSettings = {
            ...oldSettings,
            type: e.target.value
          }
        }
      }
      return newSettings
    }
    
    )
  }

  console.log(settings)

  return ( 
    <>
      <h2>{"Settings here"}</h2>
      <form>
        <div className="options-form-row">
          <label htmlFor="num-of-questions">Number of questions</label>
          <input 
            id='num-of-questions' 
            type="number" 
            min={3} 
            max={10} 
            value={settings.numOfQuestions}
            onChange={(e) => handleChange(e, 'numOfQuestions')} />
        </div>
        <div className="options-form-row">
          <label htmlFor="category">Category of questions</label>
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
        <div className="options-form-row">
          <label htmlFor="difficulty">Difficulty of questions</label>
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
        <div className="options-form-row">
          <label htmlFor="type">Type of questions</label>
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
      <Link to='/questions'> Back </Link>
    </>
   );
}
 
export default OptionsScreen;