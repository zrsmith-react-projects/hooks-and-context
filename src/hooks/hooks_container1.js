import React, { useState, useEffect } from 'react';
const HooksContainer1 = () => {

  const [stateValue, setValue] = useState(0)
  const [useEffectValue, setUseEffectValue] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setUseEffectValue('time out worked')
    }, 5000)
  }, [stateValue])

  const increment = () => {
    setValue(stateValue + 1)
  }

  const decrement = () => {
    setValue(stateValue - 1)
  }

  const changeUseEffectValue = () => {
    setUseEffectValue('some string')
  }

  return (
    <div>
      <p>hooks container 1</p>

      <button onClick={() => increment()}>+1 local state</button>
      <button onClick={() => decrement()}>-1 local state</button>
      <button onClick={() => changeUseEffectValue()}>Change useEffect</button>
      <div>
        <p>
          {useEffectValue
            ? <p>{useEffectValue}</p>
            : <p>No value</p>
          }
        </p>
        <p>Local State: {stateValue}</p>
      </div>
    </div>)
};

export default HooksContainer1