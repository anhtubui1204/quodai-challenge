import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import RouteURL from './routes';

function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)

  const dispatch = useDispatch()

  return (
    <div className="App">
      {/* <h1>Counter {counter}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged && <h3>Logged In</h3>} */}
      <Router>
        <Navbar/>
        <RouteURL/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
