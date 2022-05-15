import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import balon from './../images/balon.png'
import PartidosEnLaZona from './PartidosEnLaZona';
import MisPartidos from './MisPartidos';
import CrearPartido from './CrearPartido';

const ListaPartidos = ({ setSelectZona, zona ,token}) => {
    const [misPartidos, setMisPartidos] = useState(false)
    const [crearPartido, setCrearPartido] = useState(false)

    return (
        <>
            {
                misPartidos ? <MisPartidos setMisPartidos={setMisPartidos} /> :
                    crearPartido ? <CrearPartido token={token} setCrearPartido={setCrearPartido} /> :
                        <div className='partidos-contenedor'>
                            <Navbar className='partidos-navbar'>
                                <div className='partidos-nav-izq'>
                                    <button className='partidos-nav-volver' onClick={() => setSelectZona(false)}><FontAwesomeIcon icon={faCaretLeft} className='partidos-nav-icon' /></button>
                                </div>
                                <div className='partidos-nav-der'>
                                    <button className='partidos-nav-mios' onClick={() => setMisPartidos(true)}>Mis Partidos</button>
                                    <button className='partidos-nav-crear' onClick={() => setCrearPartido(true)}><img src={balon} className="partidos-nav-crear-icon" alt='balon' />Crear Partido</button>
                                </div>
                            </Navbar>
                            <div className='partidos-card'>
                                <PartidosEnLaZona token={token} zona={zona} />
                            </div>
                        </div>
            }
        </>
    );
}

export default ListaPartidos;