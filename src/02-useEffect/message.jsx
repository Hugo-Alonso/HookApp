import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const onMouseMove = ({ x, y }) =>  { // Desestructurar evento mousemove
            const coords = { x, y};
            setCoords(coords);
            // console.log(coords);
        }

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
    }}, [])
    
    return (
        <>
            <h3>Usuario ya existe!!</h3>
            {/*  OBJETOS no se pueden graficar directament --> Stringify() */}
            { JSON.stringify(coords) }
        </>
    )
}