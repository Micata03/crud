import React, {useState}from 'react'
import {  Button } from "react-bootstrap";
import {FaTrashAlt} from 'react-icons/fa'





export default function Tarea({desc, comentarios, eliminarTarea, id, estado}) {

    

    const [readMore, setReadMore] = useState(false);


    return (
        
                    

                    <tr>
                      <td>{id}</td>
                      <td>{desc}</td>
                      <td>{readMore ? comentarios : `${comentarios.substring(0,100)}...`}
                        <a href="#" onClick={()=> setReadMore(!readMore)}>
                        {readMore ? 'read less' : 'show more'}
                        </a></td>
                      <td>{estado}</td>  
                      <td><Button variant="danger"
                onClick={() => eliminarTarea(id)}
              >
               <FaTrashAlt/></Button></td>
                    </tr>




                   
                
        
    )
}
