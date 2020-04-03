import React, { useState } from 'react';
const HooksContainer1 = () => {

  const [stateValue, setValue] = useState(0)

  const increment = () => {
    setValue(stateValue + 1)
  }

  const decrement = () => {
    setValue(stateValue - 1)
  }

  return (
    <div>
      <p>hooks container 1</p>
      <p>Local State: {stateValue}</p>
      <button onClick={() => increment()}>+1 local state</button>
      <button onClick={() => decrement()}>-1 local state</button>
    </div>)
};

export default HooksContainer1