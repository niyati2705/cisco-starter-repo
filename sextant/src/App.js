import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner.js';
import Exhibit from './components/Exhibit/Exhibit.js';

function App() {
  return (
    <div className="App">
      <Banner />
      <main className="main-content">
        <Exhibit title="IP Address">
          {/* Child components*/}
        </Exhibit>
        <Exhibit title="Latency">
          {/* Child components */}
        </Exhibit>
      </main>
    </div>
  );
}

export default App;
