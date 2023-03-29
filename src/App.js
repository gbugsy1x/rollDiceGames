import './App.css';
import React, {useState} from 'react';
import { Header } from './Components/Header';
import {Player1} from './Components/Player1'
import { Player2 } from './Components/Player2';
import  Button  from './Components/Button';
import Winner from './Components/Winner';
function App() {
  const [data1, setData1] = useState('')
  const [data2, setData2] = useState("");

  const temp = (as)=>{
    setData1(as)
  }

  const temp2 =(as2)=> {
    setData2(as2)
  }
  return (
    <div className="App">
      <Header/>
      <Player1 setData1={data1} temp={temp} />
      <Player2 setData2={data2} temp={temp2}/>
      <Button />
      <Winner data1 ={data1} data2 = {data2}/>
      
    </div>
  );
}

export default App;
