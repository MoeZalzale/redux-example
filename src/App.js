import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement } from './redux/counterSlice';

function App() {

const {value} = useSelector((state)=>state.counter)
const dispatch = useDispatch()

  return (
    <div className="App">
     <h2> COunter is at {value}</h2>
     <button onClick= {()=> dispatch(increment())}> Increment</button>
     <button onClick= {()=> dispatch(decrement())}> decrement
     </button>
    </div>
  );
}

export default App;
