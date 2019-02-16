import { useEffect } from "react";
import Store from "store";
const Persist = ({ key }) => {
  const setPersist = state => {
    useEffect(() => {
      Store.set(key, state);
      return () => {};
    });
  };
  const getPersist = initial => {
    const localData = Store.get(key);
    if (localData === null || localData === undefined) return initial;
    else return localData;
  };
  return { setPersist, getPersist };
};
export default Persist;
