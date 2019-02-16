# Persist Hook

[Demo](https://codesandbox.io/s/0p5kx9rqrl)
> Give me a key, I'll make your hook's state persistence.

## Installation

```sh
$ npm install persist-hook
```

## Usage

```javascript
import PersistHook from 'persist-hook';

// In your hook

const config = { key: '$$$normalhook' };
const normalHook = (initialValue = 0) => {
  const { setPersist, getPersist } = PersistHook(config);
  const [state, setState] = useState(getPersist(initialValue)); // Take the persistence state if it exists.
  setPersist(state); // Synchronize between hook's state and localstorage.
  return { state, setState };
};
```
