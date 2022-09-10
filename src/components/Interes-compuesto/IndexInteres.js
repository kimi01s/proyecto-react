import Formulario from './InteresForm'

function IndexInteres() {
  return (
    <div className="container mt-4">
        <div className="row">
          <div className='col-12 col-md-6 bg-light shadow p-3 mb-5 bg-body rounded'>
            <h2 className='text-center'>Formulario interés compuesto</h2>
              <Formulario />
          </div>
          <div className='col-12 col-md-5 offset-md-1'>
            <div className='row bg-light shadow p-3 mb-5 bg-body rounded'>
              <h2>¿Qué es el interés compuesto?</h2>
              <div className='col-12'>
                <div className='col'>
                <p className='lead'>El interés compuesto es calcular cuanto dinero vamos a ganar en el transcurso de los años
                    si hacemos un depósito inicial y luego seguimos contribuyendo dinero
                    anualmente.
                </p>
                <p className='lead'>
                    1.depósito incial: déposito que se realiza la primera vez.<br/>
                    2.depósito anual: dinero que se irá introduciendo anualmente.<br/>
                    3.años: años durante los que se harán los depósitos anuales.<br/>
                    4.interés estimado: es la tasa de interés que se aplicará al depósito 
                    inicial.
                </p>
                </div>
              </div>
              <div className='col-12'>
                <h6>Fórmula</h6>
                <p className='lead'>Capital final = CO x (1+Ti)^t
                <br/>
                CO es la capital inicial, Ti la tasa del interés anual y t es el tiempo
                que dura la inversión
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default IndexInteres
