import React  from "react";
import {Container, Table } from "react-bootstrap";

import firebaseApp from "../credenciales";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import Tarea from "./Tarea";
const firestore = getFirestore(firebaseApp);
function ListadoTarea({ correoUsuario, arrayTareas, setArrayTareas }) {

    

    

    async function eliminarTarea(idTareaAEliminar) {
        // crear nuevo array de tareas
        const nvoArrayTareas = arrayTareas.filter(
          (objetoTarea) => objetoTarea.id !== idTareaAEliminar
        );
        // actualizar base de datos
        const docuRef = doc(firestore, `usuarios/${correoUsuario}`);
        updateDoc(docuRef, { tareas: [...nvoArrayTareas] });
        //actualizar state
        setArrayTareas(nvoArrayTareas);
      }


    return (
        <Container className="mt-4">
            <h2>Mis Reclamos</h2>
            <hr/>

            <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>N° de solicitud</th>
                        <th>Reclamo</th>
                        <th>Descripcion</th>
                        <th>Estado</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrayTareas.map((objetoTarea)=>{
                return <Tarea key={objetoTarea.id}
                 id={objetoTarea.id} 
                 desc={objetoTarea.descripcion} 
                 comentarios={objetoTarea.comentarios} 
                 estado={objetoTarea.estado}
                 eliminarTarea={eliminarTarea}/>
            })}
                    </tbody>
            </Table>

            
            
        </Container>
    )
}

export default ListadoTarea
