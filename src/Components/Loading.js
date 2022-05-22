import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Loading = (props)=>{
    const loading = props.loading
    if(loading) {
        return (
            <Spinner animation="border" size="xl"/>
        )
    }
    else{
       return(
           <>
               {props.children}
           </>
       )
    }


}

export default Loading