import { useState, useEffect } from "react";
export const useLocalStorage = (key, initiaValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initiaValue;
    } catch (error) {
      console.error("Error reading localStoreage:", error);
      return initiaValue;
    }
  });
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error reading localStoreage:", error);
    }
  }, [key, value]);
  return [value, setValue];
};
