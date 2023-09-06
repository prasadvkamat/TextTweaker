
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import Alert from './components/Alert';
import About from './components/About';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";




function App() {
  const [mode, setmode] = useState('dark')
  const [alert, setAlert] = useState(null)
  const setalertstatus = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)

    }, 1000);

  }
  let togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black'
      setalertstatus("dark mode activated", "success")
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      setalertstatus("light mode activated", "success")
    }
  }


  return (
    <>
      <Router>
        <Navbar title="Text Awsome" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} mode={mode} />

        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
        <Routes>
          <Route
            exact path="/"
            element={
              <Textbox
              setalertstatus={setalertstatus}
              heading="Enter the text to analyze below"
              mode={mode}
              />
            }
          />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
