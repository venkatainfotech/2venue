import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header.js';
import VunueNfo from './components/VunueNfo/index.js';

function App() {
  return (
    <div className="App">      
          <Header /> 
          
          <VunueNfo/>
    </div>
  );
}

export default App;
