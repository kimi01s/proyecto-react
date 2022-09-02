const ListaPokemonesAgregados=({ListaPokemones})=>{
    console.log(ListaPokemones)
    return(
        <table className='table table-light'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Numero</th>
                </tr>
            </thead>
            <tbody>
                {ListaPokemones.map((pokemon,index)=>{
                    return(
                        <tr key={index}>
                            <th>{pokemon.name}</th>
                            <th>{pokemon.type}</th>
                            <th>{pokemon.numberPokemon}</th>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default ListaPokemonesAgregados