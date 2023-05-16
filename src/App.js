import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { themeContext, themes } from './Context/themeContext.js';
import Login from './Component/Login.js';
import Profile from './Component/Profile';


function App() {
  const [theme, setTheme] = useState(themes.light);
  const [username, setUsername] = useState('');
  const [showprofile, setShowprofile] = useState(false);

  const handleOnclick = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)
  }
  const body = document.body;
  useEffect(() => {
    switch (theme) {
      case themes.light:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
        break;
      case themes.dark:
        body.classList.remove("bg-light");
        body.classList.remove("text-dark");
        body.classList.add("bg-dark");
        body.classList.add("text-light");
        break;
      default:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");


    }
  }, [theme])
  return (

    <div className="App">
      <themeContext.Provider value={{ theme, handleOnclick, username, setUsername, setShowprofile }}>
        {showprofile ? <Profile /> : <Login />}
      </themeContext.Provider>

    </div>
  );
}

export default App;
