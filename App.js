import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import VunueNfo from './components/venueNfo';

function App() {
  return (
    <div className="App">      
          <Header /> 

          <VunueNfo/>
    </div>
  );
}

export default App;
