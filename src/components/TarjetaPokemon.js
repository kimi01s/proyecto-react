import './SearchPokemon.css'

//#006360
const TarjetaPokemon = ({ pokemon })=>{
    if(typeof pokemon.id === 'undefined') return null
    console.log(pokemon)
    return(
        <div className="tarjeta-pokemon mt-3" id="ta-pokemon">
            <div className="container">
                <div className='row m-2 justify-content-center'>
                {pokemon.types[0].type.name === 'electric' ? 
                    <div className="card pb-3 bg-warning" style={{width:'18rem'}}>
                    <img src={pokemon.sprites.front_default} className="img-pokemon" alt={pokemon.name} />
                    <div className="card-body shadow rounded" style={{backgroundColor:'white'}}>
                        <ul className="list-group list-group-flush align-items-center">
                            <li className="list-group-item lead">Nombre : {pokemon.name}</li>
                            <li className="list-group-item lead">Tipo : {pokemon.types[0].type.name}</li>
                            <li className="list-group-item lead">Número : {pokemon.id}</li>
                        </ul>
                    </div>
                </div>:
                pokemon.types[0].type.name === 'fire' ?
                <div className="card pb-3 bg-danger" style={{width:'18rem'}}>
                    <img src={pokemon.sprites.front_default} className="img-pokemon" alt={pokemon.name} />
                    <div className="card-body shadow rounded" style={{backgroundColor:'white'}}>
                        <ul className="list-group list-group-flush align-items-center">
                            <li className="list-group-item lead">Nombre : {pokemon.name}</li>
                            <li className="list-group-item lead">Tipo : {pokemon.types[0].type.name}</li>
                            <li className="list-group-item lead">Número : {pokemon.id}</li>
                        </ul>
                    </div>
                </div>:
                pokemon.types[0].type.name === 'water' ?
                <div className="card pb-3 bg-primary" style={{width:'18rem'}}>
                    <img src={pokemon.sprites.front_default} className="img-pokemon" alt={pokemon.name} />
                    <div className="card-body shadow rounded" style={{backgroundColor:'white'}}>
                        <ul className="list-group list-group-flush align-items-center">
                            <li className="list-group-item lead">Nombre : {pokemon.name}</li>
                            <li className="list-group-item lead">Tipo : {pokemon.types[0].type.name}</li>
                            <li className="list-group-item lead">Número : {pokemon.id}</li>
                        </ul>
                    </div>
                </div>:
                pokemon.types[0].type.name === 'grass' ?
                <div className="card pb-3 bg-success" style={{width:'18rem'}}>
                    <img src={pokemon.sprites.front_default} className="img-pokemon" alt={pokemon.name} />
                    <div className="card-body shadow rounded" style={{backgroundColor:'white'}}>
                        <ul className="list-group list-group-flush align-items-center">
                            <li className="list-group-item lead">Nombre : {pokemon.name}</li>
                            <li className="list-group-item lead">Tipo : {pokemon.types[0].type.name}</li>
                            <li className="list-group-item lead">Número : {pokemon.id}</li>
                        </ul>
                    </div>
                </div>:
                pokemon.types[0].type.name === 'ground' ?
                <div className="card pb-3" style={{width:'18rem', backgroundColor:'#4a413b'}}>
                    <img src={pokemon.sprites.front_default} className="img-pokemon" alt={pokemon.name} />
                    <div className="card-body shadow rounded" style={{backgroundColor:'white'}}>
                        <ul className="list-group list-group-flush align-items-center">
                            <li className="list-group-item lead">Nombre : {pokemon.name}</li>
                            <li className="list-group-item lead">Tipo : {pokemon.types[0].type.name}</li>
                            <li className="list-group-item lead">Número : {pokemon.id}</li>
                        </ul>
                    </div>
                </div>:
                pokemon.types[0].type.name === 'normal' ?
                <div className="card pb-3" style={{width:'18rem', backgroundColor:'#006360'}}>
                    <img src={pokemon.sprites.front_default} className="img-pokemon" alt={pokemon.name} />
                    <div className="card-body shadow rounded" style={{backgroundColor:'white'}}>
                        <ul className="list-group list-group-flush align-items-center">
                            <li className="list-group-item lead">Nombre : {pokemon.name}</li>
                            <li className="list-group-item lead">Tipo : {pokemon.types[0].type.name}</li>
                            <li className="list-group-item lead">Número : {pokemon.id}</li>
                        </ul>
                    </div>
                </div>:
                <div className="card pb-3" style={{width:'18rem', backgroundColor:'#006360'}}>
                <img src={pokemon.sprites.front_default} className="img-pokemon" alt={pokemon.name} />
                <div className="card-body shadow rounded" style={{backgroundColor:'white'}}>
                    <ul className="list-group list-group-flush align-items-center">
                        <li className="list-group-item lead">Nombre : {pokemon.name}</li>
                        <li className="list-group-item lead">Tipo : {pokemon.types[0].type.name}</li>
                        <li className="list-group-item lead">Número : {pokemon.id}</li>
                    </ul>
                </div>
            </div>
            }
                    
                </div>
            </div> 
        </div>
    )
}

export default TarjetaPokemon

