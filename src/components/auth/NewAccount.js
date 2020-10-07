import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {

    // Sign in state
    const [ user, saveUser ] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })

    // extract user
    const { name, email, password, confirm } = user;

    const onChange = e => {
        saveUser({
            ...user, 
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

    }


    return ( 
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Create account</h1>
                <form
                    onSubmit={onSubmit}
                >
                     <div className='campo-form'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={name}
                            placeholder='Your name'
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Your email'
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                         <input
                            type='password'
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Your password'
                            onChange={onChange}
                        /> 
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Repeat your password</label>
                         <input
                            type='password'
                            id='confirm'
                            name='confirm'
                            value={confirm}
                            placeholder='Your password'
                            onChange={onChange}
                        /> 
                    </div>
                    <div className='campo-form'>
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Sign up'
                        />
                    </div>
                </form>
                <Link to={'/'} className='enlace-cuenta'>
                    Sign in
                </Link>
            </div>
        </div>
    );
}
 
export default NewAccount;