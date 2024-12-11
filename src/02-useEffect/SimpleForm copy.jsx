import React, { useState } from 'react'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'fernando@google.com'
    });

    const { username, email } = formState;

    const onHandleChangeName = ({ target }) => {
        setFormState({
            ...formState,
            username: target.value
        });
        // console.log(formState.username);
    };

    const onHandleChangeEmail = ({ target }) => {
        setFormState({
            ...formState,
            email: target.value
        });
    }

    return (
        <>
            <h1>Formulario Simple: </h1>
            <hr />

            <form>
                <label htmlFor="username">Name:</label>
                <input 
                    type="text" 
                    name="username"  
                    className='form-control'
                    placeholder='Username'
                    value={ username }
                    onChange={ onHandleChangeName }
                />
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email"  
                    className='form-control'
                    placeholder='abc@gmail.com'
                    value={ email }
                    onChange={ onHandleChangeEmail } 
                />
                <input type="submit" className='form-control'/>
            </form>
        </>
    );
};
