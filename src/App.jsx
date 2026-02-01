import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Github from './components/windows/Github'
import Resume from './components/windows/Resume'

function App() {
 

  return (
    <main>
      <Navbar/>
        <Github/>
        <Resume/>
      <Dock/>
    </main>
  )
}

export default App
