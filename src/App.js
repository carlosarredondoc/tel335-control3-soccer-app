import React, { useState } from 'react';
import CreateUser from './componentes/CreateUser';
import ListaPartidos from './componentes/ListaPartidos';
import Login from './componentes/Login';
import SelectorZona from './componentes/SelectorZona';

const App = () => {
  const [sesion, setSesion] = useState(false)
  const [selectZona, setSelectZona] = useState(false)
  const [isUser, setIsUser] = useState(true)
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
          isUser ?
            <Login setIsUser={setIsUser} setToken={setToken} setSesion={setSesion} />
            :
            <CreateUser setIsUser={setIsUser} />
      }
    </>
  );
}

export default App;