import React, {useEffect} from 'react';
import logo from '../static/logo.svg';
import './App.css';
import ReactGA from 'react-ga';

export default () => {
  useEffect(()=>{
    ReactGA.initialize('UA-26375392-16');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Code is Magic.
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
