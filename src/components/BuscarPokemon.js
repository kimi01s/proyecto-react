import { Formik, Form, Field } from "formik"
import { useState } from "react"
import TarjetaPokemon from './TarjetaPokemon'

function BuscarPokemon() {
  const [pokemon, setPokemon] = useState([])
    return(
        <div className="fondo-pokemon">
          <Formik
          initialValues={{searchPokemon:''}}
          onSubmit = { async values =>{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${values.searchPokemon.toLowerCase()}`)
            if(response.ok){
              const data = await response.json()
              setPokemon(data)
              console.log(data)
              document.getElementById("mostrar").classList.add("d-none")
              document.getElementById("ta-pokemon").classList.remove("d-none")
            }else{
              // alert('Pokemon no encontrado')
              document.getElementById("mostrar").classList.remove("d-none")
              document.getElementById("ta-pokemon").classList.add("d-none")
            }
          }}
          >
            
            <div className="form shadow rounded p-2">
              <div className="row">
                <div className="col-lg-5">
                  <h1 className="text-center display-6">Busca tu pokemon</h1>
                </div>
                <div className="col-lg-2 offset-lg-5">
                  <h1 className="d-none lead text-center bg-info shadow rounded" id="mostrar">Pokemon no encontrado</h1>
                </div>
              </div>
                <p className="lead">Ingresa nombre o número del pokemon</p>
                <div className="bg-info">
                <p>Pokemones mayores a 898 no se encuentra su imagen,
                además solo se encuentra hasta el Pokemon N°905</p>
                </div>
              <Form>
                <Field className="form-control" type='text' placeholder="Ej: Charmander o 4" name='searchPokemon'/>
              </Form>
            </div>
          </Formik>
          <div className="tarjeta-pokemon mt-3" id="ta-pokemon">
            <div className="container">
              <TarjetaPokemon pokemon={pokemon} />
              </div></div>
            
        </div>
    )
}

export default BuscarPokemon
