import { useContext } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './components/windows/Github'
import Notes from './components/windows/Notes'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import TerminalWindow from './components/windows/TerminalWindow'
import { windowContext } from './context/WindowControls'

function App() {
 
    const windowData=useContext(windowContext)
    const {github,notes,pdf,spotify,terminal}=(windowData.windowStates)

  return (
    <main>
      <Navbar/>
        {github && <Github/>}
        {pdf && <Resume/>}
        {notes && <Notes/>}
        {spotify && <Spotify/>}
        {terminal && <TerminalWindow/>}
      <Dock/>
    </main>
  )
}

export default App
