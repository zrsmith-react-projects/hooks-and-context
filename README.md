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

- ```js 
useEffect(() => {
  return value
})
```
- useEffect will be called every time a component renders
-```js
useEffect(() => {
  return value
}, [])
```
- use Effect will be called when the component mounts
- ```js
useEffect(() = {
  return value
}, [state.value])
```
- useEffect will be called when `state.value` changes

