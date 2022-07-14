import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Current env value of REACT_APP_API_URL
        </p>
        <p
          className="App-link"
        >
          {process.env.REACT_APP_API_URL}
        </p>
      </header>
    </div>
  );
}

export default App;
