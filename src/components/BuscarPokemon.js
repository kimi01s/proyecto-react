import { Formik, Form, Field } from "formik"
import { useState } from "react"
import './SearchPokemon.css'
import TarjetaPokemon from './TarjetaPokemon'

function BuscarPokemon() {
  const [pokemon, setPokemon] = useState([])
    return(
        <div className="col-lg-12 pt-3">
          <div className="row bg-light shadow rounded pt-3">
            <div className="col-lg-12">
                <h1 className="text-center">Busca tu Pokemon</h1>
            </div>
            <div className="col-lg-10">
              <div className="bg-info">
                <p className="text-center lead">Pokemones mayores a 898 no se 
                encuentra su imagen, además solo se encuentra hasta el Pokemon N°905</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="bg-info d-none" id="mostrar">
                <h1 className="text-center lead">Pokemon no encontrado</h1>
              </div>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-lg-12">
              <Formik
              initialValues={{searchPokemon:''}}
                onSubmit = { async values =>{
                  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${values.searchPokemon.toLowerCase()}`)
                  if(response.ok){
                    const data = await response.json()
                    setPokemon(data)
                    console.log(data)
                    document.getElementById("mostrar").className = "bg-info d-none"
                  }else{
                      document.getElementById("mostrar").className = "bg-info"
                  }
                }}
              >
                <Form>
                  <label htmlFor="Search" className="form-label">Ingresa Pokemon a buscar</label>
                  <div className="input-group">
                    <Field type="text" className="form-control" placeholder="Ej: Charmander o 4" id="Search" name='searchPokemon' />
                  </div>
                </Form>
              </Formik>
              
            </div>
         </div>
         <TarjetaPokemon pokemon={pokemon} />
        </div>
    )
}

export default BuscarPokemon
