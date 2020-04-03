## Learn Rect Hooks and Context

## Main hooks
| Hook | Use |
| :---- | :----|
| useState()  | Updates local component|
| useEffect() | Use to call function automatically|
| useContext() | Acces and update global context state/contextAPI|
| useReducer()| Update local component state with actions/reducers|


### useState()

- `const [value, setValue] = useState(initialState)`
- `<p>{value}</p>`
- Each seperate value has its own `value, setValue`

### useEffect()

```js 
useEffect(() => {
  return value
})
```

- useEffect will be called every time a component renders

```js
useEffect(() => {
  return value
}, [])
```

- use Effect will be called when the component mounts

```js
useEffect(() = {
  return value
}, [state.value])
```

- useEffect will be called when `state.value` changes

### useReducer()

- `import * as Reducer from './store/hooks/reducer'`
- `import * as ACTIONS from './store/actions/actions'`
- `const [state, dispatch] = useReducer(Reducer.reduxReducer, Reducer.initialSatet)[value, function]`
- Regular Action: `dispatch(type:"ACTION")
- Action Creator: `(payload) => dispatch(ACTIONS.create_action(payload))`
- Read State: `<p>{state.state_property</p>`

### useContext()

- Global state is initialized in `App.js`
- Any child can read state 
- State is not changed in the child component
- In seperate, create `context.js`
```js 
const Context = React.createContext({
  prop1: false
})

export default Context
```

- import context into `App.js`
- `import Context from './utils/context.js`
- In `App.js` wrap the routes with `Proivder`
```js
<Context.Provider 
  value={{
    state_props1: false,
    update_state: () => return newValue
  }}>
  <Routes />
</Context.Provider>
```

- 'prop1' will be overrider when the provider is initialized
- import context into a child component and initialize
- `import Context from '../utils/context.js`
- `const context = useContext(Context)`
- After initializing context you have global access
- Read State: `{ context.state_prop1 }` in render
- Set State: `{ () => context.update_state() }` in event handler
