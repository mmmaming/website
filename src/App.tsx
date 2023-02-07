import React, { useEffect } from 'react';
import axios from 'axios';
// @ts-ignore
// import logo from '%PUBLIC_URL%/logo192.png';
import './App.css';
const logo = process.env.PUBLIC_URL+'/logo192.png';

function App() {
  console.log(process.env)
  useEffect(() => {
    axios.get("/x/asd");
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src="/images/llo.png" className="App-logo" alt="logo" />
        <p>
          EEEEE
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
