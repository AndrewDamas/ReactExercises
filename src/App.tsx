import React from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from './Switch';
import PetInfo from './PetInfo';
import UpDownCounter from './UpDownCounter';
import Shape from './Shape';
import Things from './Things';

function App() {
  return (
    <div className="App">
      <Switch/>
      <PetInfo/>
      <UpDownCounter/>
      <UpDownCounter/>
      <UpDownCounter/>
      <Shape/>
      <Things/>
    </div>
  );
}

export default App;
