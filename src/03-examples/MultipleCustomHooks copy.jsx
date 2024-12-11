import React from 'react';
import { useFetch, useCounter } from '../hooks';
import { BarLoader } from 'react-spinners';

export const MultipleCustomHooks = () => {
    const { counter, decrement, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    if (hasError) {
        return <p>Error: {hasError.message}</p>;
    }

    return (
        <>
            <h1>Información de Pokémon</h1>
            <hr />

            {isLoading ? (
                <BarLoader />
            ) : (
                <>
                    <h2>Name: {data.name}</h2>
                    <h3>Types:</h3>
                    <ul>
                        {data.types.map((typeInfo, index) => (
                            <li key={index}>Type {index + 1}: {typeInfo.type.name}</li>
                        ))}
                    </ul>

                    {/* Mostrar la imagen del Pokémon */}
                    <img 
                        src={data.sprites.front_default} 
                        alt={data.name} 
                        style={{ width: '150px', height: '150px'}} 
                        className='rounded mx-auto d-block'
                    />
                </>
            )}

            <button 
                onClick = { () =>  counter > 1 ? decrement() : null } 
                className='btn btn-primary mt-2'>
                Anterior
            </button>

            <button onClick={() => increment()} className='btn btn-primary mt-2'>
                Siguiente
            </button>
        </>
    );
};
