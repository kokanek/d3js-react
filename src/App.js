import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart1 from './Chart1';
import Chart2 from './Chart2';

const data1 = [12, 36, 15, 25, 35, 10, 40];
const data2 = [5, 10, 15, 20, 25, 30];
const data3 = [10, 30, 10, 5];

const w = 500;
const h = 400;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chart2 data={data1} w={w} h={h} color="green"/>
        <Chart2 data={data2} w={w} h={h} color="orange"/>
        <Chart2 data={data3} w={w} h={h} color="cyan"/>
        <Chart2 data={data3} w={w} h={h} color="tomato"/>
      </header>
    </div>
  );
}

export default App;
