import React from 'react';
import balon from './../images/balon.png'
import player from './../images/player.png'
import axios from 'axios'
const url = 'http://localhost:8000/'

const CreateUser = ({ setIsUser }) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(url + 'api/users/register', {
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value
        })
        setIsUser(true)
    }
    return (
        <div>
            <form className='create-formulario' onSubmit={handleSubmit}>
                <h1 className='create-title'>Soccer App</h1>
                <div className='create-contenedor'>
                    <div className='create-label'>
                        <input
                            type='text'
                            name='nombre'
                            id='nombre'
                            className='create-input'
                            placeholder='Nombre'
                        />
                    </div>
                    <div className='create-label'>
                        <input
                            type='text'
                            name='apellido'
                            id='apellido'
                            className='create-input'
                            placeholder='Apellido'
                        />
                    </div>
                    <div className='create-label'>
                        <input
                            type='text'
                            name='usuario'
                            id='correo'
                            className='create-input'
                            placeholder='Correo'
                        />
                    </div>
                    <div className='create-label'>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            className='create-input'
                            placeholder='Contraseña'
                        />
                    </div>
                    <div className='create-label'>
                        <input
                            type='password'
                            name='confirm-password'
                            id='confirm-password'
                            className='create-input'
                            placeholder='Confirmar Contraseña'
                        />
                    </div>
                </div>
                <div>
                    <button className='create-boton' type='submit'><img src={balon} className="logo-balon" alt='balon' />Registrarse</button>
                </div>
                <label className='create-pass-label' onClick={() => setIsUser(true)}>Iniciar sesion</label>
            </form>
            <img src={player} alt='' className='logo-player' />
        </div>
    );
}

export default CreateUser;