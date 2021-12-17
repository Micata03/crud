import React, {useState} from 'react'
import {Stack, Container, Form, Button} from 'react-bootstrap'
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
        <Container>
      <Stack gap={3}>
      {estaRegistrandose ? "Registrate" : "Inicia sesion"}
          <Form onSubmit={submitHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    {estaRegistrandose ? "Registrate" : "Inicia sesion"}
  </Button>
</Form>
<Button style={{width:"300px"}} variant="primary" type="submit" onClick={()=> signInWithRedirect(auth, googleProvider)}>
    Acceder con Google
  </Button>
  <Button style={{width:"300px"}}  variant="secondary" onClick={()=> setEstaRegistrandose(!estaRegistrandose)}>
    {estaRegistrandose ? "Ya estas registrado? Inicia sesion" : "No tienes cuenta? Registrate!"}
  </Button>
      </Stack>
      
      </Container>
    )
    
}

export default Logueo