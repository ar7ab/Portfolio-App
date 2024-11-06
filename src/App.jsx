import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';


const App = () => {
  return (
    <DarkModeProvider>
      <Routes basename='/Portfolio-App/'>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Products />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </DarkModeProvider>
  );
}

export default App;
