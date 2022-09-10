import { Formik, Form, Field } from "formik"
import { useState } from "react"
import Articulos from './Articulos'


const BuscarImg =()=>{
    const [photos, setPhotos] = useState([])
    return(
        <div className="container">
            <div className="row pt-2">
                <div className="col-lg-12 pb-4">
                    <h2 className="text-center">Ingrese imagen que desearía encontrar</h2>
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
                         <Form>
                            <Field className="form-control" type='text' placeholder="Ej: office" name='search'/>
                        </Form>
                    </Formik>
                </div>
                <div className="col-lg-12">
                    <Articulos Photos = {photos}/>
                </div>
            </div>
        </div>
    )
}

export default BuscarImg