import React from 'react'
import { Button, Col, Row, Stack , Container} from 'react-bootstrap'

function ListadoTarea({arrayTareas}) {
    return (
        <Container>
            <Stack>
                {arrayTareas.map((objetoTarea)=>{
                    return(
                        <>
                        <Row>
                            <Col>{objetoTarea.descripcion}</Col>
                            <Col><Button>Ver archivo</Button></Col>
                            <Col><Button>Eliminar tarea</Button></Col>
                        </Row>
                        <hr/>
                        </>
                    )
                })}
            </Stack>
        </Container>
    )
}

export default ListadoTarea
