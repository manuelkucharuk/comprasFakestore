import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import FormRegistro from '../Components/FormRegistro'

const RegistroPage = ()=>{
    return(
        <Container>
            <h1>Registro de usuario</h1>
            <Row>
                <Col sm={4}>
                    <FormRegistro />
                </Col>
            </Row>
        </Container>
    )
}

export default RegistroPage