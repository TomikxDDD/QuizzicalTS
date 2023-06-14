import './assets/App.css'
import './assets/reset.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen'
import QuestionsScreen from './components/QuestionScreen/QuestionsScreen'
import OptionsScreen from './components/OptionsScreen/OptionsScreen'

function App() {


  return (
    <div className={'app-container'}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomeScreen/>}></Route>
          <Route path='/questions' element={<QuestionsScreen/>}></Route>
          <Route path='/options' element={<OptionsScreen/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
