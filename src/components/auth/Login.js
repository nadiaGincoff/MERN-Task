import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    // Sign in state
    const [ user, saveUser ] = useState({
        email: '',
        password: ''
    })

    // extract user
    const { email, password } = user;

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
                <h1>iniciar sesion</h1>
                <form
                    onSubmit={onSubmit}
                >
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
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Sign in'
                        />
                    </div>
                </form>
                <Link to={'/new-account'} className='enlace-cuenta'>
                    Sign up
                </Link>
            </div>
        </div>
    );
}
 
export default Login;