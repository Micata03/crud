import React from 'react'
import AgregarTarea from './AgregarTarea'


import Swal from 'sweetalert2'
import firebaseApp from "../credenciales";
import { getFirestore, updateDoc, doc } from "firebase/firestore";

const firestore = getFirestore(firebaseApp);


export default function Modal({correoUsuario, arrayTareas, setArrayTareas, isModalOpen, close}) {
    
 

  async function añadirTarea(e) {
    e.preventDefault();
    const descripcion = e.target.formDescripcion.value;
    const comentarios = e.target.formComentarios.value;
    const estado = e.target.formEstado.value;
    // crear nuevo array de tareas
    const nvoArrayTareas = [
      ...arrayTareas,
      {
        id: +new Date(),
        descripcion: descripcion,
        comentarios: comentarios,
        estado: estado
      },
    ];
   

    // actualizar base de datos
    const docuRef = doc(firestore, `usuarios/${correoUsuario}`);
    updateDoc(docuRef, { tareas: [...nvoArrayTareas] });
    //actualizar estado
    setArrayTareas(nvoArrayTareas);
    // limpiar form
    e.target.formDescripcion.value = "";
    e.target.formComentarios.value= "";
    //alerta
    Swal.fire({
        icon: 'success',
        title: 'Su reclamo se ingreso correctamente',
        text: `en breve sera solucionado`
    })
    close();
  }
    return (
     
          <AgregarTarea añadirTarea={añadirTarea} isModalOpen={isModalOpen} close={close}/> 
          
      
         
      
      
    )
}
