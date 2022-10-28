const PokemonBuscado =({pokemon,tipoPokemon, AgregarListaPokemon})=>{
    console.log(...tipoPokemon)
    return(
        <div className={`card bg-${tipoPokemon} PokemonTarjet`}>
           <img className="card-img-top w-50 rounded-circle img-pokemon" alt={pokemon.name}
                src={pokemon.sprites.front_default}/>
                <div className="card-body shadow rounded mx-3" style={{backgroundColor:'white'}}>
                <ul className="list-group align-items-center">
                <li className="list-group-item lead border-0">Nombre : {pokemon.name}</li>
                <li className="list-group-item lead border-0">Tipo : {pokemon.types[0].type.name}</li>
                <li className="list-group-item lead border-0">Número : {pokemon.id}</li>
                </ul>
                </div>
                <div className="card-footer d-grid gap-2 mt-2">
                    <button className={`btn btn-${tipoPokemon}`}
                    onClick={()=>{AgregarListaPokemon({pokemon})}}
                    >agregar a la lista</button>
                </div>         
        </div>
    )
}

export default PokemonBuscado