import './App.css';
import Footer from './components/Footer';
import DrawerAppBar from './components/Header';

import Selector from './components/Selector';
import Slide from './components/Slider';

function App() {
  return (
    <div className="App">
     <DrawerAppBar />
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
