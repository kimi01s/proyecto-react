import { useField } from "formik"

const InputInteres =({label, ...props})=>{
    const [field, meta] = useField(props)
return(
    <div className='form-group mb-3'>
        <label htmlFor='deposit' className='form-label'>{label}</label>
        <input {...field}{...props}/>
        {meta.touched && meta.error? (
            <p className='form-label text-danger'>{meta.error}</p>
            ):<p></p>}
    </div>
)
}

export default InputInteres