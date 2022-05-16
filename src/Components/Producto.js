import React from 'react'
import './Producto.css';

import {Link} from 'react-router-dom'

const Producto = (props)=>{
    const {id,image,title,price} = props
    return(
        <div className="producto">
            <div className="image">
                <img src={image} alt=''/>
            </div>
            <div className = "datos">
                <p className = "title">{title}</p>
                <p className = "price">Us$ {price}</p>
                <p className = "pDetalle">
                    <Link to={"/producto/"+id}>
                        <button className="btnDetalle">Detalle</button>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Producto