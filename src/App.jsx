import React from 'react'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
// import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
// import { resume } from 'react-dom/server'

const App = () => {
  const [windowsState, setWindowsState] = useState({
    github:false,
    Note:false,
    resume:false,
    spotify:false,
    Cli:false
  })
  return (
    <main>
      <Nav/>
      <Dock/>
      <Github/>
      <Note/>
      <Resume/>
      <Spotify/>
      <Cli/>
    </main>
 )
}

export default App