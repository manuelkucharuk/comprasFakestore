import FormRegistro from '../Components/FormRegistro'

const RegistroPage = ()=>{
    return(
        <div className='ml-4'>
            <h1 className='title is-2'>Registro de usuario</h1>
            <div className='columns'>
                <div className='column is-4'>
                    <FormRegistro/>
                </div>
            </div>
        </div>
    )
}

export default RegistroPage