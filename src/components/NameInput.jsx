import React from 'react';

const NameInput = ({ name, setName }) => {
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <input
      type="text"
      value={name}
      onChange={handleChange}
      placeholder="Enter your name"
    />
  );
};

export default NameInput;