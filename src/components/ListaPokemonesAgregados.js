const ListaPokemonesAgregados=({ListaPokemones})=>{
    console.log(ListaPokemones)
    return(
        <ul className="list-group list-group-flush">
            {ListaPokemones.map((pokemon, index)=>{
                return(
                    <li className="list-group-item list-group-item-action" key={index}>Nombre: {pokemon.name}, Tipo: {pokemon.type}, Número: {pokemon.numberPokemon}</li>
                )
            })}
        </ul>
    )
}
export default ListaPokemonesAgregados