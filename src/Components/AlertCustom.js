import Alert from 'react-bootstrap/Alert'

const style={
    marginTop: '10px'
}

const AlertCustom = (props)=>{

    const {text, variant} = props

    return(
        <Alert variant={variant} style={style}>
            {text}
        </Alert>
    )

}

export default AlertCustom