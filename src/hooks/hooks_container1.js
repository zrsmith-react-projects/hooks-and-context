import React, { useState, useEffect, useReducer } from 'react';
import * as Reducer from '../store/hooksState/hooks_reducer.js'
import * as ACTIONS from '../store/actions/actions.js'

const HooksContainer1 = () => {

  const [stateValue, setValue] = useState(0)
  const [useEffectValue, setUseEffectValue] = useState(null)

  const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

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

  const handleDispatchTrue = () => {
    //dispatch.(ACTIONS.SUCCESS)
    dispatch(ACTIONS.success())
  }

  const handleDispatchFalse = () => {
    dispatch(ACTIONS.failure())
  }

  return (
    <div>
      <p>hooks container 1</p>

      <button onClick={() => increment()}>+1 local state</button>
      <button onClick={() => decrement()}>-1 local state</button>
      <button onClick={() => changeUseEffectValue()}>Change useEffect</button>
      <button onClick={() => handleDispatchTrue()}>Dispatch True</button>
      <button onClick={() => handleDispatchFalse()}>Dispatch False</button>
      <div>
        <p>
          {useEffectValue
            ? <p>{useEffectValue}</p>
            : <p>No value</p>
          }
        </p>
        <p>
          {
            state.stateprop1
              ? <p>State prop1 is true</p>
              : <p>State prop1 is false</p>
          }
        </p>
        <p>Local State: {stateValue}</p>
      </div>
    </div>)
};

export default HooksContainer1