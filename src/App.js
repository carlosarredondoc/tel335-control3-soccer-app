import React, { useState } from 'react';
import ListaPartidos from './componentes/ListaPartidos';
import Login from './componentes/Login';
import SelectorZona from './componentes/SelectorZona';

const App = () => {
  const [sesion, setSesion] = useState(false)
  const [selectZona, setSelectZona] = useState(false)
  const [token, setToken] = useState('')
  const [zona, setZona] = useState('')
  return (
    <>
      {
        sesion ?
          selectZona ?
            <ListaPartidos token={token} zona={zona} setSelectZona={setSelectZona} />
            :
            <SelectorZona setZona={setZona} setSelectZona={setSelectZona} setSesion={setSesion} />
          :
          <Login setToken={setToken} setSesion={setSesion} />
      }
    </>
  );
}

export default App;