import { useEffect } from 'react';
import { useRef } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


type useIntervalProps = {
    callback: () => void;
    delay: number | null;
}


export const useInterval = ( { callback, delay }: useIntervalProps) => {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
        // @ts-ignore
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
          // @ts-ignore
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
}