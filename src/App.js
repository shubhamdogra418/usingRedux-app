import './App.css';
import CompCounter from './components/Count';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch= useDispatch();
  return (
    <div className="App">
      <button onClick={(e)=> dispatch({type : "INCREMENT"})}> Increment</button>
      <CompCounter/>
       <button onClick={(e)=> dispatch({type : "DECREMENT"})}> DecRement</button>
    </div>
  );
}

export default App;
