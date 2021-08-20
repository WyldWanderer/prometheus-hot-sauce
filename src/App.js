import React, {useState, useEffect} from 'react';
import { Route, Link} from "react-router-dom"

const App = () => {
  
  
  return (
    <>
      <div>
        <h1>Prometheus Hot Sauce</h1>
        <h3>Bring some fire to your life</h3>
      </div>
      <nav>
        <ul><Link to="/home">Home</Link></ul>
        <ul><Link to="/next-batch-notes">Next Batch</Link></ul>
        <ul><Link to="/sauces">Pick Your Fire</Link></ul>
      </nav>
    </>
  );
}

export default App;
