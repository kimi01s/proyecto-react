const Listaobj = (values) => {
    return(
        <div className="table-responsive">
            <table className="table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Región</th>
                  </tr>
                </thead>
                <tbody>
                    {values.valores.map((valor,index) =>{
                        return(
                            <tr key={index}>
                                <td>{valor.name}</td>
                                <td>{valor.lastname}</td>
                                <td>{valor.email}</td>
                                <td>{valor.region}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Listaobj