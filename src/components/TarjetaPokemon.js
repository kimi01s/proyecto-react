import './SearchPokemon.css'
import {useState} from 'react'
import ListaPokemonesAgregados from './ListaPokemonesAgregados'
//#006360

const TarjetaPokemon = ({ pokemon })=>{
    const [ListaPokemones, setListaPokemones] = useState([])

    const AgregarListaPokemon=({pokemon})=>{
        console.log(pokemon)
        const ListaPokemonAgregar = {
            name: pokemon.name,
            type: pokemon.types[0].type.name,
            numberPokemon: pokemon.id
        }
        if(ListaPokemones.find(x => x.numberPokemon === ListaPokemonAgregar.numberPokemon)){
           return alert("ya tienes este pokemon en tu lista")
        }
        setListaPokemones([...ListaPokemones,ListaPokemonAgregar])

    }
    if(typeof pokemon.id === 'undefined') {
        return(
            <div className='row'>
                <div className='col-lg-4 col-md-5 p-0'>

                </div>
                <div className='col-lg-8 col-md-7 bg-info shadow rounded pb-4'>
                <h1 className='display-6'>Pokemones agregados:</h1>
                <ListaPokemonesAgregados ListaPokemones = {ListaPokemones} />
            </div> 
            </div>
        )
    }
    // console.log(pokemon)
    
    return(
        <div className='row'>
            <div className='col-lg-4 col-md-5 p-0'>
                {pokemon.types[0].type.name === 'electric' ? 
                        <div className="card pb-3 bg-warning" style={{width:'18rem'}}>
                        <img src={pokemon.sprites.front_default} className="img-pokemon" alt={pokemon.name} />
                        <div className="card-body shadow rounded mx-3" style={{backgroundColor:'white'}}>
                            <ul className="list-group list-group-flush align-items-center">
                                <li className="list-group-item lead">Nombre : {pokemon.name}</li>
                                <li className="list-group-item lead">Tipo : {pokemon.types[0].type.name}</li>
                                <li className="list-group-item lead">Número : {pokemon.id}</li>
                            </ul>
                        </div>
                        <button className='btn btn-warning btn-sm mt-3'
                        onClick={()=>{AgregarListaPokemon({pokemon})}}>Agregar a la Lista</button>
                    </div>:
                    pokemon.types[0].type.name === 'fire' ?
                    <div className="card pb-3 bg-danger" style={{width:'18rem'}}>
                        <img src={pokemon.sprites.front_default} className="img-pokemon" alt={pokemon.name} />
                        <div className="card-body shadow rounded mx-3" style={{backgroundColor:'white'}}>
                            <ul className="list-group list-group-flush align-items-center">
                                <li className="list-group-item lead">Nombre : {pokemon.name}</li>
                                <li className="list-group-item lead">Tipo : {pokemon.types[0].type.name}</li>
                                <li className="list-group-item lead">Número : {pokemon.id}</li>
                            </ul>
                        </div>
                        <button className='btn btn-danger btn-sm mt-3'
                        onClick={()=>{AgregarListaPokemon({pokemon})}}>Agregar a la Lista</button>
                    </div>:
                    pokemon.types[0].type.name === 'water' ?
                    <div className="card pb-3 bg-primary" style={{width:'18rem'}}>
                        <img src={pokemon.sprites.front_default} className="img-pokemon" alt={pokemon.name} />
                        <div className="card-body shadow rounded mx-3" style={{backgroundColor:'white'}}>
                            <ul className="list-group list-group-flush align-items-center">
                                <li className="list-group-item lead">Nombre : {pokemon.name}</li>
                                <li className="list-group-item lead">Tipo : {pokemon.types[0].type.name}</li>
                                <li className="list-group-item lead">Número : {pokemon.id}</li>
                            </ul>
                        </div>
                        <button className='btn btn-primary btn-sm mt-3'
                        onClick={()=>{AgregarListaPokemon({pokemon})}}>Agregar a la Lista</button>
                    </div>:
                    pokemon.types[0].type.name === 'grass' ? //N°45
                    <div className="card pb-3 bg-success" style={{width:'18rem'}}>
                        <img src={pokemon.sprites.front_default} className="img-pokemon" alt={pokemon.name} />
                        <div className="card-body shadow rounded mx-3" style={{backgroundColor:'white'}}>
                            <ul className="list-group list-group-flush align-items-center">
                                <li className="list-group-item lead" name='name'>Nombre : {pokemon.name}</li>
                                <li className="list-group-item lead" name='type'>Tipo : {pokemon.types[0].type.name}</li>
                                <li className="list-group-item lead" name='number'>Número : {pokemon.id}</li>
                            </ul>
                        </div>
                        <button className='btn btn-success btn-sm mt-3'
                        onClick={()=>{AgregarListaPokemon({pokemon})}}>Agregar a la Lista</button>
                    </div>:
                    pokemon.types[0].type.name === 'ground' ?
                    <div className="card pb-3" style={{width:'18rem', backgroundColor:'#4a413b'}}>
                        <img src={pokemon.sprites.front_default} className="img-pokemon" alt={pokemon.name} />
                        <div className="card-body shadow rounded mx-3" style={{backgroundColor:'white'}}>
                            <ul className="list-group list-group-flush align-items-center">
                                <li className="list-group-item lead">Nombre : {pokemon.name}</li>
                                <li className="list-group-item lead">Tipo : {pokemon.types[0].type.name}</li>
                                <li className="list-group-item lead">Número : {pokemon.id}</li>
                            </ul>
                        </div>
                        <button className='btn btn-sm mt-3' style={{backgroundColor:'#4a413b'}}
                        onClick={()=>{AgregarListaPokemon({pokemon})}}>Agregar a la Lista</button>
                    </div>:
                    <div className="card pb-3" style={{width:'18rem', backgroundColor:'#006360'}}>
                    <img src={pokemon.sprites.front_default} className="img-pokemon" alt={pokemon.name} />
                    <div className="card-body shadow rounded mx-3" style={{backgroundColor:'white'}}>
                        <ul className="list-group list-group-flush align-items-center">
                            <li className="list-group-item lead">Nombre : {pokemon.name}</li>
                            <li className="list-group-item lead">Tipo : {pokemon.types[0].type.name}</li>
                            <li className="list-group-item lead">Número : {pokemon.id}</li>
                        </ul>
                    </div>
                    <button className='btn btn-sm mt-3' style={{backgroundColor:'#006360'}}
                        onClick={()=>{AgregarListaPokemon({pokemon})}}>Agregar a la Lista</button>
                </div>
                }
                
            </div> 
            <div className='col-lg-8 col-md-7 bg-info shadow rounded pb-4'>
                <h1 className='display-6'>Pokemones agregados:</h1>
                <ListaPokemonesAgregados ListaPokemones = {ListaPokemones} />
            </div> 
        </div>
    )
}

export default TarjetaPokemon

