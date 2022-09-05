import { useField } from "formik"

const SelectForm=({label, ...props})=>{
    const [field,meta]=useField(props);
    return(
        <div className="mb-3">
            <label htmlFor={label}>{label}</label>
            <select className="form-select" {...field} {...props}/>
            {meta.touched && meta.error ?
                        <p className="h6 text-danger m-0">{meta.error}</p>
                        :
                        <p className="h6 text-danger m-0"></p>}
            {/* <div className="input-group col-lg-12">
                <div className="input-group-text col-lg-2 col-12">
                    <p className="h6 lead">{label}</p>
                </div>
                <div className="col-lg-10 col-12">
                    <select className="form-select pb-3" {...field} {...props}/>   
                </div>
            
                <div>
                    {meta.touched && meta.error ?
                        <p className="h6 text-danger m-0">{meta.error}</p>
                        :
                        <p className="h6 text-danger m-0"></p>}
                </div>
            </div> */}
        </div>
    )
}

export default SelectForm