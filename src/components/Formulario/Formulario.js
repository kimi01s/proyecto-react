import { Formik, Form} from "formik"
import TextForm from "./TextForm"
import SelectForm from "./SelectForm"
import SendBtn from "./SendBtn"
import Listaobj from "./Listaobj"
import * as Yup from 'yup'
import "./Formulario.css"
import bootstrap from "/node_modules/bootstrap/dist/js/bootstrap.js"
import {useState} from 'react'


const Formulario = () =>{
    const [lista, setLista] = useState([])

    const AlertDuplicado = (message, type)=>{
      var wrapper = document.createElement("div")
      wrapper.id = "ContainerAlert"
      wrapper.innerHTML =  '<div class="alert alert-'+type+' alert-dismissible fade show" role="alert">'+message+
      '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      document.getElementById("alert").append(wrapper)
    }

    return(
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8 col-md-4">
            <h1>Formulario</h1>
          </div>
          <div className="col" id="alert"></div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-5 divControl">
            <div className="row">
             <Formik
              initialValues={{
                name:'',
                lastname:'',
                email:'',
                region:'',
              }}
              onSubmit={(values,{resetForm})=>{
                console.log(values)
                if(lista.find( x=> x.name || x.lastname === values.name || values.lastname)){
                  return (AlertDuplicado("no se puede agregar la misma persona dos veces", "warning")
                  ,
                  setTimeout(()=>{
                    var alertDiv = document.getElementById("ContainerAlert")
                    var alertContent = new bootstrap.Alert(alertDiv)
                    alertContent.close()
                   },3000)
                   )
                }
                setLista([...lista,values])
                resetForm()
              }}
              validationSchema={Yup.object({
                name: Yup.string().required('Requerido'),
                lastname: Yup.string().required('Requerido'),
                email: Yup.string().email('Debe ser un email valido').required('Requerido'),
                region: Yup.string().required('Requerido'),
              })}
             >
              <Form>
                  <TextForm name='name' label='Nombre'/>
                  <TextForm name='lastname' label='Apellido'/>
                  <TextForm name='email' label='E-mail'/>
                  <SelectForm name='region' label='Región'>
                    <option value=''>Seleccione una región</option>
                    <option value='1'>Región 1</option>
                    <option value='2'>Región 2</option>
                    <option value='3'>Región 3</option>
                  </SelectForm>
                  <SendBtn/>
              </Form>
             </Formik>
            </div>
            
          </div>
          <div className="col">
            <p className="lead">lista de ingresados:</p>
            <Listaobj valores={lista} />
            
          </div>
        </div>
        </div>
            
    )
}

export default Formulario