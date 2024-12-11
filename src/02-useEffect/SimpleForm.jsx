import React, { useEffect, useState } from 'react'
import { Message } from './message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'fernando@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        // console.log(event.target.value)
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value 
        })
    };

    useEffect(() => {
        //console.log('SimpleForm mounted!');
    }, []);

    useEffect(() => {
      // console.log('formState changed!');
    }, [formState]);

    useEffect(() => {
        // console.log('email changed!');
    }, [email]);
    
    return (
        <>
            <h1>Formulario con custom Hook: </h1>
            <hr />

            <form>
                <label htmlFor="username">Name:</label>
                <input 
                    type="text" 
                    name="username"  
                    className='form-control'
                    placeholder='Username'
                    value={ username }
                    onChange={ onInputChange }
                />
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email"  
                    className='form-control'
                    placeholder='abc@gmail.com'
                    value={ email }
                    onChange={ onInputChange }
                />
                <input type="submit" className='form-control'/>
            </form>


            { 
                ( username === 'strider2' ) && <Message /> 
            }
        </>
    );
};

