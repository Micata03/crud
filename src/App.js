import React, {useState} from 'react'

import Home from './componentes/Home';
import Logueo from './componentes/Logueo';
import firebaseApp from './credenciales';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modal from './componentes/Modal';
const auth =getAuth(firebaseApp)

function App() {
 
  const [usuarioGlobal, setUsuarioGlobal] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuarioGlobal(usuarioFirebase)
    }else{
      setUsuarioGlobal(null)
    }
  })

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={usuarioGlobal ? <Home  correoUsuario={usuarioGlobal.email}  /> : <Logueo/>}></Route>
      <Route path="/agregar" element={<Modal></Modal>}></Route>
      
    
    

  </Routes>
    </BrowserRouter>

  );
}

export default App;