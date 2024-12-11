import React from 'react'

let it = 0;

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log(`  Me volví a generar :( ${it++} `);

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
