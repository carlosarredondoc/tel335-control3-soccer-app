import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'

const CrearPartido = ({ setCrearPartido }) => {
    return (
        <div className='partidos-contenedor'>
            <Navbar className='partidos-navbar'>
                <div className='partidos-nav-izq'>
                    <button className='partidos-nav-volver' onClick={() => setCrearPartido(false)}><FontAwesomeIcon icon={faCaretLeft} className='partidos-nav-icon' /></button>
                </div>
                <div className='partidos-nav-der'>
                    <label className='crearPartido-nav'>Crear Partido</label>
                </div>
            </Navbar>
            <div className='partidos-card'>
            <form className='crearPartido-formulario'>
                <div>
                    <div className='crearPartido-label'>
                        <input
                            type='text'
                            name='usuario'
                            id='correo'
                            className='crearPartido-input'
                            placeholder='Nombre del partido'
                        />
                    </div>
                    <div className='crearPartido-label'>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            className='crearPartido-input'
                            placeholder='Nombre del equipo 1'
                        />
                    </div>
                    <div className='crearPartido-label'>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            className='crearPartido-input'
                            placeholder='Nombre del equipo 2'
                        />
                    </div>
                    <div className='crearPartido-label'>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            className='crearPartido-input'
                            placeholder='Cantidad de personas por equipo'
                        />
                    </div>
                    <div className='crearPartido-label'>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            className='crearPartido-input'
                            placeholder='Nombre de la Cancha'
                        />
                    </div>
                    <div className='crearPartido-label'>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            className='crearPartido-input'
                            placeholder='Ubicacion (Calle)'
                        />
                    </div>
                    <div className='crearPartido-label'>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            className='crearPartido-input'
                            placeholder='Region'
                        />
                    </div>
                    <div className='crearPartido-label'>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            className='crearPartido-input'
                            placeholder='Ciudad'
                        />
                    </div>
                </div>
                <div className='crearPartido-recuadro-boton'>
                    <button className='crearPartido-boton' type='submit'> Crear Partido</button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default CrearPartido;