import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import CardContainer from './components/CardContainer';
import Card from './components/Card';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App flex flex-col w-full">
        <Navbar/>
        <Header/>
        <div className='self-center justify-center flex pt-4'>
          <Home />
        </div>
        <div className='self-center justify-center flex pt-4'>
          <CardContainer />
        </div>
        <Footer/>
    </div>
  );
}

export default App;
