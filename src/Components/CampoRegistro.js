import React from "react"
import Form from 'react-bootstrap/Form'

const CampoRegistro = (props)=>{
      const {id,type,label,placeholder} = props
      return (
          <Form.Group className="mb-3">
              <Form.Label>{label}</Form.Label>
              <Form.Control type={type} id={id} placeholder={placeholder} onChange={props.onChange} />
          </Form.Group>
      )
}

export default CampoRegistro
