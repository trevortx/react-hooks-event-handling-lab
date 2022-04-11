import React from 'react';

function Keypad() {
  return (
  <>
    <label for="password">Password</label>
    <input 
      type="password" 
      onChange={() => console.log("Entering password...")}
    />
  </>
  )
}

export default Keypad