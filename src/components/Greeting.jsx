import React from 'react';

const Greeting = ({ name }) => {
  return (
    <h1>Hello, {name || 'Friend'}!</h1>
  );
};

export default Greeting;