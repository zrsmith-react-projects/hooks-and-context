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