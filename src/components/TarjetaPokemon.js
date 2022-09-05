import './SearchPokemon.css'
import {useState} from 'react'
import ListaPokemonesAgregados from './ListaPokemonesAgregados'
import bootstrap from "/node_modules/bootstrap/dist/js/bootstrap.js"
//#006360

const TarjetaPokemon = ({ pokemon, AlertPokemon })=>{
    const [ListaPokemones, setListaPokemones] = useState([])

    const AgregarListaPokemon=({pokemon})=>{
        console.log(pokemon)
        const ListaPokemonAgregar = {
            name: pokemon.name,
            type: pokemon.types[0].type.name,
            numberPokemon: pokemon.id
        }
        if(ListaPokemones.find(x => x.numberPokemon === ListaPokemonAgregar.numberPokemon)){
        return (AlertPokemon("ya tienes este pokemon en tu lista", "warning"),
        setTimeout(()=>{
         var alertDiv = document.getElementById("ContainerAlert")
         var alertContent = new bootstrap.Alert(alertDiv)
         alertContent.close()
        },3000))
        }

        setListaPokemones([...ListaPokemones,ListaPokemonAgregar])

    }
    if(typeof pokemon.id === 'undefined') {
       return (
        <div className="row py-2">
            <div className='col-lg-4 col-md-4 col-12'></div>
                <div className="col-lg-8 col-md-8 col-12">
                <h1 className="text-center">Lista Pokemones agregados</h1>
                <div className='table-responsive-md'>
                    <ListaPokemonesAgregados ListaPokemones = {ListaPokemones} />
                </div>
            </div>
        </div>
        
       )
    }
    
    return(
        <div className='row py-2'>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 offset-xl-0 offset-lg-0 offset-md-3">
                {pokemon.types[0].type.name === 'electric' ?
                <div className="card bg-warning" style={{width:'18rem'}}>
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
                        <button className='btn btn-warning'
                        onClick={()=>{AgregarListaPokemon({pokemon})}}
                        >agregar a la lista</button>
                    </div>
                </div>:
                pokemon.types[0].type.name === 'fire' ?
                <div className="card bg-danger" style={{width:'18rem'}}>
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
                        <button className='btn btn-danger'
                        onClick={()=>{AgregarListaPokemon({pokemon})}}
                        >agregar a la lista</button>
                    </div>
                </div>:
                pokemon.types[0].type.name === 'water' ?
                <div className="card bg-info" style={{width:'18rem'}}>
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
                        <button className='btn btn-info'
                        onClick={()=>{AgregarListaPokemon({pokemon})}}
                        >agregar a la lista</button>
                    </div>
                </div>:
                pokemon.types[0].type.name === 'grass' ?
                <div className="card bg-success" style={{width:'18rem'}}>
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
                        <button className='btn btn-success'
                        onClick={()=>{AgregarListaPokemon({pokemon})}}
                        >agregar a la lista</button>
                    </div>
                </div>:
                <div className="card bg-secondary" style={{width:'18rem'}}>
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
                        <button className='btn btn-secondary'
                        onClick={()=>{AgregarListaPokemon({pokemon})}}
                        >agregar a la lista</button>
                    </div>
                </div>
            }
        </div>
            <div className="col-lg-8 col-md-12 col-12">
                <h1 className="text-center">Lista Pokemones agregados</h1>
                <div className='table-responsive-md'>
                    <ListaPokemonesAgregados ListaPokemones = {ListaPokemones} />
                </div>
            </div>
        </div>
        
    )
}

export default TarjetaPokemon

