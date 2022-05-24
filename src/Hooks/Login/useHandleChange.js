const useHandleChange = (form,setForm)=>{
    const handleChange = (e)=>{
        const id = e.target.id
        const value = e.target.value

        setForm(
            {
                ...form,
                [id]: value
            }
        )
    }

    return handleChange
}

export default useHandleChange