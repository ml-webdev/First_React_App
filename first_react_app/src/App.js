import './App.css';
import Quotes from './components/Quotes';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Quotes className="quotes-component"/>
      <Timer className="timer-component"/>
    </div>
  );
}

export default App;
