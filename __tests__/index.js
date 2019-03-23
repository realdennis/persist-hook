import { useState } from 'react';
import { renderHook, cleanup, act } from 'react-hooks-testing-library';
import PersistHook from 'persist-hook';
const config = { key: '$$$normalhook' };
const usePersistState = (initialValue = 0) => {
  const { setPersist, getPersist } = PersistHook(config);
  const [state, setState] = useState(getPersist(initialValue));
  setPersist(state); // it will synchronize state and localstorage
  return [state, setState];
};

afterEach(cleanup);
test('initialShould be zero', () => {
  const { result } = renderHook(() => usePersistState(0));
  expect(result.current[0]).toBe(0);
});

test('hook could be set', () => {
  const { result } = renderHook(() => usePersistState());
  act(() => result.current[1](10));

  expect(result.current[0]).toBe(10);
});

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}
global.localStorage = new LocalStorageMock();
test('hook could be set', () => {
  const { result } = renderHook(() => usePersistState());
  act(() => result.current[1](666));
  expect(localStorage.$$$normalhook).toEqual('666');
});
