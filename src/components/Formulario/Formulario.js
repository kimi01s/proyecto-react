import { Formik, Form} from "formik"
import TextForm from "./TextForm"
import SelectForm from "./SelectForm"
import SendBtn from "./SendBtn"
import * as Yup from 'yup'
import "./Formulario.css"


const Formulario = () =>{
    
    return(
      <div className="container">
        <h1>Formulario</h1>
        <div className="row">
          <div className="divControl">
            <Formik
            initialValues={{
              name:'',
              lastname:'',
              email:'',
              region:'',
           }}
            onSubmit={(values,{resetForm})=>{
                console.log(values)
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
              <TextForm name='email' label='email' type='email'/>
                <SelectForm label='Región' name='region'>
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
      </div>
            
    )
}

export default Formulario