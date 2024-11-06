import { Route, Routes } from 'react-router-dom'
import { DarkModeProvider } from './context/DarkModeContext.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'

const App = () => {
  return (
    <DarkModeProvider>
      <Routes basename='/ /'>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </DarkModeProvider>
  )
}

export default App