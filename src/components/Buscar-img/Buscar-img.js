import { Formik, Form, Field } from "formik"
import { useState } from "react"
import Articulos from './Articulos'


const BuscarImg =()=>{
    const [photos, setPhotos] = useState([])
    return(
        <div className="container">
            <div className="row pt-2">
                <h1>Ingrese imagen que quiere buscar</h1>
                <Formik
                initialValues={{search:''}}
                onSubmit={async values =>{
                    const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
                    {headers:{
                            'Authorization':'Client-ID LLKJnkDEOZPIFReD-eSFX6GdGcu_ECX6Rj5G3stmOYE'
                        }
                    })
                    const data = await response.json()
                    setPhotos(data.results)
                }}
                >
                    <div className="col-lg-12 mt-3 mb-3">
                        <Form>
                            <Field className="form-control" type='text' placeholder="Ej: office" name='search'/>
                        </Form>
                    </div>
                </Formik>
                <Articulos Photos = {photos}/>
            </div>
        </div>
    )
}

export default BuscarImg