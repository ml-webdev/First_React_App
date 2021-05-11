import './App.css';
import Quotes from './components/Quotes';
import Sounds from './components/Sounds';
import Timer from './components/Timer';


function App() {
  return (
    <div className="App">
      <Quotes className="quotes-component" name="Miguel"/>
      <Timer className="timer-component"/>
      <Sounds/>
    </div>
  );
}

export default App;
