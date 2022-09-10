import { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputInteres from './InputInteres'

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

const InteresForm=()=>{
    const [balance, setBalance] = useState('');
    const handleSubmit=({deposit, contribution,years,rate})=>{
        const val = compoundInterest(Number(deposit),Number(contribution),Number(years),Number(rate));
        setBalance(formatter.format(val));
    }
    return(
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
            rate: Yup.number().required('Requerido').typeError('debe ser un número'),
          })}>
            <Form>
              <InputInteres
                name="deposit" 
                label="Depósito inicial" 
                className="form-control"
                id="deposit"
                placeholder="Ej:1000"
                type="number"
              />
              <InputInteres
                name="contribution" 
                label="Contribución Anual" 
                className="form-control"
                id="contribution"
                placeholder="Ej:1000"
                type="number"
              />
              <InputInteres
                name="years" 
                label="Años" 
                className="form-control"
                id="years"
                placeholder="Ej:1000"
                type="number"
              />
              <InputInteres
                name="rate" 
                label="interés estimado" 
                className="form-control"
                id="rate"
                placeholder="Ej:1000"
                type="number"
              />
              <div className='row'>
                <div className='col'>
                  <button type='submit' className='btn btn-primary'>Calcular</button>
                </div>
                <div className='col'>
                  {balance !== '' ? <p className='h4 lead text center'>Balance Final: {balance}</p> : <p></p>}
                </div>
              </div>
            </Form>
          </Formik>
    )
}

export default InteresForm