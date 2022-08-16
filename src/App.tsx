import React, { useState } from 'react';
import './App.scss';
import { AnalogClock } from './Clock/AnalogClock';
import { DigitalClock } from './Clock/DigitalClock';
import styles from './Clock/Clock.module.scss';

function App() {
  const [toggleClock, setToggleClock] = useState<boolean>(true);

  return (
    <div className="App">
      <AnalogClock />
    </div>
  );
}

export default App;
