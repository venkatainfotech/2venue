import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import VunueNfo from './components/venueNfo';
import Location from './components/location';
import Highlights from './components/Highlights';
function App() {
  return (
    <div className="App" style={{ height:"2500px",background:'cornflowerblue'}}>      
          <Header /> 

          <Highlights/>

          <VunueNfo/>

          <Location/>

    </div>
  );
}

export default App;
