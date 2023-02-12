import React, { useEffect } from 'react';
import axios from 'axios';
// @ts-ignore
// import logo from '%PUBLIC_URL%/logo192.png';
import './App.css';
const logo = process.env.PUBLIC_URL+'/logo192.png';

function App() {
  console.log("这里是")
  console.log(process.env)
  useEffect(() => {
    axios.get("/x/asd");
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test Website
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
          测试123
          Learn React

      </header>
    </div>
  );
}

export default App;
