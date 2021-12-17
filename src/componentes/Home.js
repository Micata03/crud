import React, { useEffect } from 'react'
import firebaseApp from '../credenciales'
import {getAuth, signOut} from 'firebase/auth'
import { Container, Button } from 'react-bootstrap'
import ListadoTarea from './ListadoTarea'
import AgregarTarea from './AgregarTarea'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)

function Home({correoUsuario}) {

   
    const fakeData = [
        
    ]

    async function buscarDocumentoOrCrearDocumento(idDocumento){
        //crear referencia al documento
        const docuRef = doc(firestore, `usuarios/${idDocumento}`);

        //buscar documento
        const consulta = await getDoc(docuRef);

        //revisar si existe
        if(consulta.exists()){
            //si si existe
            const infoDocu = consulta.data();
            return infoDocu.tareas;
        }else{
           //si no existe 
           await setDoc(docuRef, {reacciones: [...fakeData]})
           const consulta = await getDoc(docuRef);
           const infoDocu = consulta.data();
           return infoDocu.tareas;

        }
        

        
    }


    useEffect(()=>{

        


    }, [])
    return (
        <Container>
            <h4>Hola, sesion iniciada</h4>
            <Button onClick={()=> signOut(auth)}>Cerrar Sesion</Button>
            <hr/>
            <AgregarTarea/>
            <ListadoTarea arrayTareas={fakeData}/>

        </Container>
    )
}

export default Home