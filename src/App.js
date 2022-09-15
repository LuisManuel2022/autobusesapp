import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Selector from './components/Selector';
import Slide from './components/Slider';

function App() {
  return (
    <div className="App">
     <Header />
     <hr />
     <Slide />
     <hr />
     <Selector />
     <hr />
     <Footer />
    </div>
  );
}

export default App;
