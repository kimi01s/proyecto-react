import { useField } from "formik"

const TextInput =({ label, ...props })=>{
    const[field, meta] = useField(props);

    return(
        <div className="mb-3">
            <label htmlFor={label}> {label}</label>
            <input type="text" className="form-control" placeholder={label} {...field}/>
            {meta.touched && meta.error ?
            <p className="h6 text-danger m-0">
                {meta.error}
            </p>:
            <p>
                
            </p>
            }
            {/* <div className="input-group col-lg-12">
                <div className="input-group-text col-lg-2 col-12">
                    <p className="h6 lead">{label}</p>
                </div>
                <input type="text" className="form-control" {...field}/>
            </div>
            <div>
            
            </div> */}
        </div>
    )
}

export default TextInput