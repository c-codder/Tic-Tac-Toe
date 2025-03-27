import React, { useState } from 'react';
import Greeting from './components/Greeting';
import NameInput from './components/NameInput';
import Weekdays from './components/Weekdays';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <Greeting name={name} />
      <NameInput name={name} setName={setName} />
      <Weekdays />
    </div>
  );
}

export default App;