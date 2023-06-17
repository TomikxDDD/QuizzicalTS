import './assets/App.css'
import './assets/reset.css'

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen'
import QuestionsScreen from './components/QuestionScreen/QuestionsScreen'
import SettingsScreen from './components/SettingsScreen/SettingsScreen'

import { initialSettings } from './Settings'

function App() {

  const [settings, setSettings] = useState(initialSettings)

  function resetSettings () {
    setSettings(initialSettings)
  }


  return (
    <div className={'app-container'}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomeScreen/>}></Route>
          <Route path='/questions' element={<QuestionsScreen settings={settings}/>}></Route>
          <Route path='/settings' element={<SettingsScreen settings={settings}  setSettings={setSettings} resetSettings={resetSettings}/>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
