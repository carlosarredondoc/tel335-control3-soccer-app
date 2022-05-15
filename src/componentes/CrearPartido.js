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
                            name='nombre_partido'
                            id='nombre_partido'
                            className='crearPartido-input'
                            placeholder='Nombre del partido'
                        />
                    </div>
                    <div className='crearPartido-label'>
                        <input
                            type='text'
                            name='nombre_equipo_1'
                            id='nombre_equipo_1'
                            className='crearPartido-input'
                            placeholder='Nombre del equipo 1'
                        />
                    </div>
                    <div className='crearPartido-label'>
                        <input
                            type='text'
                            name='nombre_equipo_2'
                            id='nombre_equipo_2'
                            className='crearPartido-input'
                            placeholder='Nombre del equipo 2'
                        />
                    </div>
                    <div className='crearPartido-label'>
                        <input
                            type='text'
                            name='cantidad_de_personas_por_equipo'
                            id='cantidad_de_personas_por_equipo'
                            className='crearPartido-input'
                            placeholder='Cantidad de personas por equipo'
                        />
                    </div>
                    <div className='crearPartido-label'>
                        <input
                            type='text'
                            name='nombre_cancha'
                            id='nombre_cancha'
                            className='crearPartido-input'
                            placeholder='Nombre de la Cancha'
                        />
                    </div>
                    <div className='crearPartido-label'>
                        <input
                            type='text'
                            name='nombre_calle'
                            id='nombre_calle'
                            className='crearPartido-input'
                            placeholder='Ubicacion (Calle)'
                        />
                    </div>
                    <div className='crearPartido-label'>
                        <input
                            type='text'
                            name='nombre_region'
                            id='nombre_region'
                            className='crearPartido-input'
                            placeholder='Region'
                        />
                    </div>
                    <div className='crearPartido-label'>
                        <input
                            type='text'
                            name='nombre_ciudad'
                            id='nombre_ciudad'
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