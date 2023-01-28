
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Movies from './Components/Movies';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




function App() {
  return (

    <>
      <Router>

        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Movies' element={<Movies />} />
        
        
        
        
      </Routes>

    </Router>
    </>


    



  );
}

export default App;
