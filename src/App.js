import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as skripte from './main'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       

        <input type="number" id="a" name="a" />
        <input type="number" id="b" name="b" />
        <button onClick={skripte.saberi}>Saberi</button>
        <button onClick={skripte.oduzmi}>Oduzmi</button>
        <button onClick={skripte.pomnozi}>Mnozi</button>
        <button onClick={skripte.podeli}>Deli</button>
      </header>
    </div>
  );
}

export default App;
