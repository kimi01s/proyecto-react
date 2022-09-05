import { Formik, Form, Field } from "formik"
import { useState } from "react"
import './SearchPokemon.css'
import TarjetaPokemon from './TarjetaPokemon'
import bootstrap from "/node_modules/bootstrap/dist/js/bootstrap.js"

function BuscarPokemon() {
  const [pokemon, setPokemon] = useState([])

  const AlertPokemon = (message, type)=>{
    var wrapper = document.createElement("div")
    wrapper.id = "ContainerAlert"
    wrapper.innerHTML =  '<div class="alert alert-'+type+' alert-dismissible fade show" role="alert">'+message+
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    document.getElementById("alertPokemon").append(wrapper)
  }
    return(
        <div className="col-lg-12 pt-3">
          <div className="row bg-light shadow rounded pt-3">
            <div className="col-lg-9">
                <h1 className="pb-lg-5">Busca tu Pokemon</h1>
            </div>
            <div className="col-lg-3" id="alertPokemon"></div>
            <div className="col-lg-12">
              <div className="bg-info">
                <p className="text-center lead">Pokemones mayores a 898 no se 
                encuentra su imagen, además solo se encuentra hasta el Pokemon N°905</p>
              </div>
            </div>
            <div className="col-lg-2">
              
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
                  }else{
                      AlertPokemon("pokemon no encontrado", "info")
                      setTimeout(()=>{
                        var alertDiv = document.getElementById("ContainerAlert")
                        var alertContent = new bootstrap.Alert(alertDiv)
                        alertContent.close()
                      },2000)
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
         <TarjetaPokemon pokemon={pokemon} AlertPokemon= {AlertPokemon} />
        </div>
    )
}

export default BuscarPokemon
