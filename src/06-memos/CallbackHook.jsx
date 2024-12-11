import React, { useCallback, useContext, useState } from 'react'
import { useCounter } from '../hooks'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);    
    
    const incrementFather = useCallback(
      () => {
        setCounter((value) => value + 1);
      },
      [],
    )
    
    return (
        <>
            <h1>useCallBack Hook: { counter }</h1>
            <hr />
            
            <ShowIncrement increment={ incrementFather }/>
        </>
    )
}
