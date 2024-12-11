import React from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />

            <button className='btn btn-primary button' onClick={ () => increment(2) }>+1</button>
            {/* Solo estas devolviendo la refencia con el () => Reset */}
            <button className='btn btn-primary button' onClick={ () => reset() }>Reset</button>
            <button className='btn btn-primary button' onClick={ () => decrement(20) }>-1</button>
        </>    
    )
}
