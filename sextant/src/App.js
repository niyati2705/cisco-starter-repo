import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner.js';
import Exhibit from './components/Exhibit/Exhibit.js';
import DisplayIP from './components/DisplayIP/DisplayIP.js';
import Latency from './components/Latency/Latency.js';

function App() {
  return (
    <div className="App">
      <Banner />
      <main className="main-content">
      <Exhibit title="IPv4 Address">
          <DisplayIP type="IPv4" />
        </Exhibit>
        <Exhibit title="IPv6 Address">
            <DisplayIP type="IPv6" />
        </Exhibit>
      <Latency title="Latency">
          
        </Latency>
      </main>
    </div>
  );
}

export default App;
