import React, { useState, useEffect } from "react";

import firebaseApp from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

import { Container, Button, Navbar } from "react-bootstrap";

import Modal from './Modal'
import ListadoTarea from "./ListadoTarea";
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);



const Home = ({ correoUsuario }) => {
 
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  


    
    const [arrayTareas, setArrayTareas] = useState(null);
    const fakeData = [
      
    ];
  
    async function buscarDocumentOrCrearDocumento(idDocumento) {
      //crear referencia al documento
      const docuRef = doc(firestore, `usuarios/${idDocumento}`);
      // buscar documento
      const consulta = await getDoc(docuRef);
      // revisar si existe
      if (consulta.exists()) {
        // si sí existe
        const infoDocu = consulta.data();
        return infoDocu.tareas;
      } else {
        // si no existe
        await setDoc(docuRef, { tareas: [...fakeData] });
        const consulta = await getDoc(docuRef);
        const infoDocu = consulta.data();
        return infoDocu.tareas;
      }
      
    }
    useEffect(() => {
      async function fetchTareas() {
        const tareasFetchadas = await buscarDocumentOrCrearDocumento(
          correoUsuario
        );
        setArrayTareas(tareasFetchadas);
      }
  
      fetchTareas();

      
    }, []);

    

  return (
    <Container >

            <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"><Button variant="dark" onClick={() => signOut(auth)} >Cerrar sesión</Button></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Sesion iniciada como: <a href="#login">{correoUsuario}</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            
        
     
     
      
      {arrayTareas ? (
        <ListadoTarea correoUsuario={correoUsuario} arrayTareas={arrayTareas} setArrayTareas={setArrayTareas}
          
        />
      ) : null}

      

       {isModalOpen ? 
                <Modal correoUsuario={correoUsuario} arrayTareas={arrayTareas} setArrayTareas={setArrayTareas} close={closeModal}/>
                
                : 

                <Button style={{width:"320px"}}variant="dark" onClick={openModal} className="mx-2 mt-5">Iniciar Nuevo Reclamo</Button>
      }
      
                                

               
        
            
               

       
               

            

    </Container>
  );
};

export default Home;