import { useField } from "formik"

const InputInteres =({label, ...props})=>{
    const [field, meta] = useField(props)
return(
    <div className="mb-3">
        <label className="form-label">{label}</label>
        <div className='input-group'>
            <input {...field} {...props}/>
        </div>   
        <div>
        {meta.touched && meta.error ?(
                <label className="text-danger">{meta.error}</label>
            ):<label></label>}
            
        </div>         
    </div>
)
}

export default InputInteres