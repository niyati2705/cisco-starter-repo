import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner.js';
import Exhibit from './components/Exhibit/Exhibit.js';
import DisplayIP from './components/DisplayIP/DisplayIP.js';

function App() {
  return (
    <div className="App">
      <Banner />
      <main className="main-content">
      <Exhibit title="IP Address">
          <DisplayIP type="IPv4" />
        </Exhibit>
        <Exhibit title="Latency">
          
        </Exhibit>
      </main>
    </div>
  );
}

export default App;
