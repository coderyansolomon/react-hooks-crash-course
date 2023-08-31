'use client'
import { useState } from "react";

export default function useBrowserStorage(storageType = 'localStorage'){
    const [error, setError] = useState(null);
  
    const storage = window[storageType];
  
    const getItem = (key) => {
      try {
        const item = storage.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch (err) {
        setError(err);
        return null;
      }
    };
  
    const setItem = (key, value) => {
      try {
        const serializedValue = JSON.stringify(value);
        storage.setItem(key, serializedValue);
      } catch (err) {
        setError(err);
      }
    };
  
    const removeItem = (key) => {
      try {
        storage.removeItem(key);
      } catch (err) {
        setError(err);
      }
    };
  
    return {
      getItem,
      setItem,
      removeItem,
      error,
    };
  };