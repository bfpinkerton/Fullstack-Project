
import './App.css';
import Appbar from './components/Appbar';
import User from './components/User';
import { Navbar } from './components/Navbar';
import News from './components/Pages/News';
import RouterComponent from './components/RouterComponent';

function App() {
  return (
    <div className="App">
        <Appbar/>
        <Navbar/>
        {<RouterComponent/>}
      
    </div>
  );
}

export default App;
