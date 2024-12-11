import React from 'react';
import { useFetch, useCounter } from '../hooks';
import { BarLoader } from 'react-spinners';
import { PokemonCard } from './PokemonCard';

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
               <PokemonCard 
               id={counter} 
               name={data.name} 
               sprites={ [
                    data.sprites.front_default,
                    data.sprites.front_shiny,
                    data.sprites.back_default,
                    data.sprites.back_shiny
               ]}
            />
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
