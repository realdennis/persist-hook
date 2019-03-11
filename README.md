# Persist Hook

[Demo](https://codesandbox.io/s/0p5kx9rqrl)
> Give me a key, I'll make your hook's state persistence.

## Installation

```sh
$ npm install persist-hook
```

## Usage

```javascript
import PersistHook from "persist-hook";

const config = { key: "$$$normalhook" };
const usePersistState = (initialValue = 0) => {
  const { setPersist, getPersist } = PersistHook(config);
  const [state, setState] = useState(getPersist(initialValue));
  setPersist(state); // it will synchronize state and localstorage
  return [state, setState];
};

const App = () => {
  const [state, setState] = usePersistState(0);
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <p>{state}</p>
      <button onClick={() => setState(state + 1)}>+1</button>
      <button onClick={() => setState(state - 1)}>-1</button>
      <br />
      <button onClick={() => window.location.reload()}>Reload this page</button>
    </div>
  );
};
```
