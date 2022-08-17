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
                <h1 className="text-center">Busca tu pokemon</h1>
              </div>
              <div className="col-lg-2 offset-lg-5">
                <h1 className="d-none lead text-center bg-info shadow rounded" id="mostrar">Pokemon no encontrado</h1>
              </div>
              </div>
            <Form>
              <p className="lead">Ingresa nombre o número del pokemon</p>
              <Field className="form-control" type='text' placeholder="Search" name='searchPokemon'/>
            </Form>
            </div>
          </Formik>
          <TarjetaPokemon pokemon = {pokemon}/>
            
        </div>
    )
}

export default BuscarPokemon
