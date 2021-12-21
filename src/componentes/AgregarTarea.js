import React from "react";
import { Container, Form, Col, Row, Button, CloseButton, Card,  } from "react-bootstrap";
import {AiFillCloseSquare} from 'react-icons/ai'








const ArgegarTarea = ({añadirTarea, close}) => {
 
 
  

  return (
    <Container >
      <Card >
        <Card.Header className="text-center ">
        <Row>
          <Col sm={8}><h3>Iniciar un nuevo Reclamo</h3> </Col>
          <Col sm={4}> <AiFillCloseSquare style={{cursor: "pointer"}} onClick={close} className=" text-end"></AiFillCloseSquare></Col>
        </Row>
          
       
        </Card.Header>
        <Card.Body>
        <Form onSubmit={añadirTarea}>
        <Form.Group className="mb-3">
        <Form.Label>Titulo del reclamo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Describe tu Reclamo"
            id="formDescripcion"
          />
       </Form.Group>
       <Form.Group className="mb-3">
        <Form.Label>Descripcion del reclamo</Form.Label>
          <Form.Control as="textarea" rows={3}
            type="text"
            placeholder="Comentarios"
            id="formComentarios"
            
          />
        </Form.Group>
        <Form.Select aria-label="Default select example" id="formEstado" style={{width:"120px"}}>
          <option>Estado</option>
          <option value="abierto">Abierto</option>
          <option value="cerrado">Cerrado</option>
          
        </Form.Select >
          <Button variant="dark" type="submit" className=" mt-4"> Agregar</Button>
          
          
          
     
    </Form>
        </Card.Body>
      </Card>

    
      
  </Container>

    
    
  );
};

export default ArgegarTarea;