import React, {useState} from 'react'
import {Stack, Container, Form, Button, Row, Col, Card} from 'react-bootstrap'

import firebaseApp from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth'

const auth =getAuth(firebaseApp)

const googleProvider = new GoogleAuthProvider()

function Logueo() {
    const [estaRegistrandose, setEstaRegistrandose] = useState(false)
    
    async function submitHandler(e){
      e.preventDefault();
      const correo = e.target.formBasicEmail.value;
      const password = e.target.formBasicPassword.value;

      if(estaRegistrandose){
        const usuario = await createUserWithEmailAndPassword(auth, correo, password);
      }else{
        signInWithEmailAndPassword(auth, correo, password)
      }
      
      
      
    }
    
    return (
        <Container   >


            <Card style={{ width: '25rem', margin: "20% auto", padding: "1rem" }}>
              <Card.Img variant="top" style={{ width: '10rem', margin:"0 auto " }} src="https://www.svgrepo.com/show/794/male-user.svg" />
              <Card.Body>
                <Card.Title className='text-center'>{estaRegistrandose ?  <h3 >  Registrate </h3>: <h3>Inicia sesion </h3>}</Card.Title>
                <Card.Text >
                <Form onSubmit={submitHandler}  >
                      <Form.Group as={Row} className="mb-3  " controlId="formBasicEmail">
                        
                          
                        <Form.Control  type="email" placeholder="Enter email"/>
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                        
                        
                        <Form.Control type="password"   placeholder="Password" />
                      </Form.Group>

                      <Button style={{width:"300px"}}variant="dark" type="submit" >
                        {estaRegistrandose ? "Registrate" : "Inicia sesion"}
                      </Button>
                    </Form>
                    <Button style={{width:"300px"}} className='mt-3' variant="dark" type="submit" onClick={()=> signInWithRedirect(auth, googleProvider)}>
                        Acceder con Google
                      </Button>
               <a href="#" className="d-block mt-3 text-center"  onClick={()=> setEstaRegistrandose(!estaRegistrandose)}>{estaRegistrandose ? "Ya estas registrado? Inicia sesion" : "No tienes cuenta? Registrate!"}</a>
 
                </Card.Text>

                  
              </Card.Body>
            </Card>














     
      
      </Container>
    )
    
}

export default Logueo