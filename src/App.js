import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';
import RouteURL from './routes';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <RouteURL/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
