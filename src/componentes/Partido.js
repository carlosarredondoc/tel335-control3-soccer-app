import React, { useEffect, useState } from 'react';
import axios from 'axios'
import BotonUnirse from './BotonUnirse';
import Equipo from './Equipo'
const url = 'http://localhost:8000/'

const Partido = ({ ciudadPartido, token, zona }) => {
    const [partidos, setPartidos] = useState([])


    const cargarPartido = async () => {
        const respuesta = await axios.get(url + 'api/match/region/' + zona, { headers: { 'Authorization': `Bearer ${token}` } })
        setPartidos(respuesta.data.match)
    }

    useEffect(() => {
        cargarPartido()
    }, [])
    return (
        <>
            {
                partidos.length == 0 ?
                    <div className='partidos-card-partidos'>
                        <h1 className='partidos-card-partidos-no'>No Hay Partidos Disponibles</h1>
                    </div>
                    :
                    ciudadPartido ? partidos.map((partido, key) => {
                        return (

                            ciudadPartido == partido.city ?
                                <div key={key} className='partidos-card-partidos'>
                                    <div className='partidos-card-partidos-titulo'>
                                        <h1>{partido.nameMatch}</h1>
                                        <h4>{partido.nameSoccerField}</h4>
                                        <h4>{partido.location} - {partido.city}</h4>
                                    </div>
                                    <Equipo partido={partido} token={token} />
                                </div>
                                :
                                <></>
                        )
                    })
                        :
                        partidos.map((partido, key) => {
                            return (
                                <div key={key} className='partidos-card-partidos'>
                                    <div className='partidos-card-partidos-titulo'>
                                        <h1>{partido.nameMatch}</h1>
                                        <h4>{partido.nameSoccerField}</h4>
                                        <h4>{partido.location} - {partido.city}</h4>
                                    </div>
                                    <Equipo partido={partido} token={token} />
                                </div>
                            )
                        })
            }
        </>
    );
}

export default Partido;