import './App.css';
import InputBox from './InputBox/InputBox';
import ButtonPlacement from './ButtonPlacement/ButtonPlacement';
import Calculation from './Calculation';

function App() {
  return (
    <div className="App">
      <h1>REACT CALCULATOR</h1>
      <InputBox />
      <Calculation />
      <ButtonPlacement />
     
    </div>
  );
}

export default App;
