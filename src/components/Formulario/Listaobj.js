const Listaobj = (values) => {
    return(
        <div className="ps-2">
            {values.valores.map((valor,index)=>{
                return(
                    <div key={index} className='row border mb-2'>
                        <div className="col-lg-5">
                            <p>Nombre completo: {valor.name} {valor.lastname}</p>
                        </div>
                        <div className="col-lg-5">
                            <p>Email: {valor.email}</p>
                        </div>
                        <div className="col-lg-2">
                            <p>Región: {valor.region}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Listaobj