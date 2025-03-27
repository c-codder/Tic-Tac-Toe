import React from 'react';

const Weekdays = () => {
  const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  // Get current day index (0 = Sunday, 1 = Monday, etc.)
  const today = new Date().getDay();
  // Adjust for Monday start (today - 1, with Sunday as 6 instead of 0)
  const startIndex = today === 0 ? 6 : today - 1;
  
  // Create rotated array starting from today
  const orderedDays = [
    ...weekdays.slice(startIndex),
    ...weekdays.slice(0, startIndex)
  ];

  return (
    <div>
      <h2>Weekdays (starting from today)</h2>
      <ul>
        {orderedDays.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </ul>
    </div>
  );
};

export default Weekdays;