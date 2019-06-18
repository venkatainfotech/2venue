import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import VunueNfo from './components/venueNfo';
import Location from './components/location';

function App() {
  return (
    <div className="App">      
          <Header /> 

          <VunueNfo/>
          <Location/>

    </div>
  );
}

export default App;
