import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import CardContainer from './components/CardContainer';
import Card from './components/Card';
import Footer from './components/Footer';
import About from './components/About';
function App() {
  return (
    <div className="App flex flex-col w-full h-screen">
        <Navbar/>
        <Header/>
        <div className='self-center justify-center flex pt-4'>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </Router>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
