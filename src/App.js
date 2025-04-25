
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
        <section id="posts">
          <ApiData />
        </section>
       
      </main>
     
    </div>
  );
}

export default App;
