import { useState } from 'react'
import Input from './InputInteres'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const compoundInterest=(deposit,contribution,years, rate)=>{
    let Total = deposit;
    for(let i=0; i<years; i++){
        Total = (Total+contribution) * (rate + 1);
    }
    return Math.round(Total);
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function IndexInteres() {
  const [balance, setBalance] = useState('');
  const handleSubmit=({deposit, contribution,years,rate})=>{
    const val = compoundInterest(Number(deposit),Number(contribution),Number(years),Number(rate));
    setBalance(formatter.format(val));
}
  
  return (
    <div className="container d-flex justify-content-center">
        <div className="row">
            <div className='text-center'>
            <p className='h1'>interes compuesto</p>
            </div>
            <div className='shadow p-3 mb-5 bg-body rounded'>
            <Formik
            initialValues={{
                deposit: '',
                contribution: '',
                years: '',
                rate: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
              deposit: Yup.number().required('Requerido').typeError('debe ser un número'),
              contribution: Yup.number().required('Requerido').typeError('debe ser un número'),
              years: Yup.number().required('Requerido').typeError('debe ser un número') ,
              rate: Yup
              .number()
              .required('Requerido')
              .typeError('debe ser un número')
              .min(0, 'El valor mínimo es 0')
              .max(1,'El valor máximo es 1'),
            })}
            >
            
                <Form>
                    <Input 
                    name="deposit" 
                    label="Depósito inicial" 
                    className="form-control"/>

                    <Input 
                    name="contribution" 
                    label="Contribución anual" 
                    className="form-control"/>

                    <Input 
                    name="years" 
                    label="Años"
                    className="form-control"/>

                    <Input 
                    name="rate" 
                    label="Interés estimado"
                    className="form-control"/>

                    <button type="submit" className="btn btn-primary">Calcular</button>
                </Form>
            </Formik>
            <div className='col-lg-4 offset-lg-8 offset-6'>
            {balance !== '' ? <label className='h6'>Balance Final: {balance}</label> : <label></label>}
            </div>
            </div>
        </div>
    </div>
  )
}

export default IndexInteres
