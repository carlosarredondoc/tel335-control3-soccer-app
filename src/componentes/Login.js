import React, { useState } from 'react';
import balon from './../images/balon.png'
import player from './../images/player.png'
import axios from 'axios'
const url = 'http://localhost:8000/'

const Login = ({ setSesion, setToken, setIsUser }) => {
    const [usuario, setUsuario] = useState('profesor@soccerapp.cl')
    const [password, setPassword] = useState('12345')


    const onChange = (e) => {
        if (e.target.name === 'usuario') {
            setUsuario(e.target.value)
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const respuesta = await axios.post(url + 'api/users/login', { email: usuario, password: password })
        if (respuesta.data.token) {
            setToken(respuesta.data.token)
            setSesion(true)
        } else {
            setUsuario('')
            setPassword('')
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className='login-formulario'>
                <h1 className='login-title'>Soccer App</h1>
                <div>
                    <div className='login-label'>
                        <input
                            type='text'
                            name='usuario'
                            id='correo'
                            value={usuario}
                            onChange={onChange}
                            className='login-input'
                            placeholder='Correo'
                        />
                    </div>
                    <div className='login-label'>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            value={password}
                            onChange={onChange}
                            className='login-input'
                            placeholder='Contraseña'
                        />
                    </div>
                    <a className='login-pass-label' href='/'>¿Olvidaste tu contraseña?</a>
                </div>
                <div>
                    <button className='login-boton' type='submit'><img src={balon} className="logo-balon" alt='balon' />Ingresar</button>
                </div>
                <div>
                    <button className='login-boton' type='submit' onClick={() => setIsUser(false)}>Crear Usuario</button>
                </div>
            </form>
            <img src={player} alt='' className='logo-player' />
        </div>
    );
}

export default Login;