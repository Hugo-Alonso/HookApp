import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'; 

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm , username, email, password, info } = useForm({
        username: '',
        email: '',
        password: '',
        info: ''
    }) 

    // const { username, email, password, info } = formState; 

    useEffect(() => {
    }, []);
    
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
                <input 
                    type="password" 
                    name="password"  
                    className='form-control'
                    placeholder='password'
                    value={ password }
                    onChange={ onInputChange }
                />
                <textarea 
                    name="info"  
                    className='form-control'
                    placeholder='Write your opinion... '
                    value={ info }
                    onChange={ onInputChange }
                />
                <input type="submit" className='form-control mt-2'/>

                <button onClick={ onResetForm } className='btn btn-primary mt-2'>Reset</button>
            </form>
        </>
    );
};
