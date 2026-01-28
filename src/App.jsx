import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import MacWindow from './components/windows/MacWindow'

function App() {
 

  return (
    <main>
      <Navbar/>
      <MacWindow>
        <h3>Hello, Mac Window!</h3>
        <p>Demo</p>
      </MacWindow>
      <Dock/>
    </main>
  )
}

export default App
