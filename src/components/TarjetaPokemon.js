import './SearchPokemon.css'
import {useState} from 'react'
import PokemonBuscado from './PokemonBuscado'
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
                <PokemonBuscado pokemon={pokemon} tipoPokemon="warning" AgregarListaPokemon={AgregarListaPokemon}/>:

                pokemon.types[0].type.name === 'fire' ?
                <PokemonBuscado pokemon={pokemon} tipoPokemon="danger" AgregarListaPokemon={AgregarListaPokemon}/>:
                
                pokemon.types[0].type.name === 'water' ?
                <PokemonBuscado pokemon={pokemon} tipoPokemon="info" AgregarListaPokemon={AgregarListaPokemon}/>:
                
                pokemon.types[0].type.name === 'grass' ?
                <PokemonBuscado pokemon={pokemon} tipoPokemon="success" AgregarListaPokemon={AgregarListaPokemon}/>:
                
                <PokemonBuscado pokemon={pokemon} tipoPokemon="secondary" AgregarListaPokemon={AgregarListaPokemon}/>
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

