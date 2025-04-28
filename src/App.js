
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ApiData from './components/ApiData';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="todo">
          <ApiData />
        </section>
       
      </main>
     
    </div>
  );
}

export default App;
