import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './components/windows/Github'
import Notes from './components/windows/Notes'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import TerminalWindow from './components/windows/TerminalWindow'

function App() {
 

  return (
    <main>
      <Navbar/>
        <Github/>
        <Resume/>
        <Notes/>
        <Spotify/>
        <TerminalWindow/>
      <Dock/>
    </main>
  )
}

export default App
