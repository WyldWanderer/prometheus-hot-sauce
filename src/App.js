import React, {useState, useEffect} from 'react';
import { Route, Link} from "react-router-dom"
import HotSauceCard from './components/HotSauceCard';
import HomeScreen from './components/HomeScreen';


const App = () => {
  const
  
  return (
    <>
      <div>
        <h1>Prometheus Hot Sauce</h1>
        <h3>Bring some fire to your life</h3>
      </div>
      <nav>
        <ul><Link to="/">Home</Link></ul>
        <ul><Link to="/next-batch-notes">Next Batch</Link></ul>
        <ul><Link to="/Our Story">Pick Your Fire</Link></ul>
        <ul><Link to="/venmo">Leave A Tip</Link></ul>
      </nav>
      <div>
        <Route path="/" render={() => {
          return <HomeScreen sauces={sauces}/> }
        }/>
      </div>
      
    </>
  );
}

export default App;
