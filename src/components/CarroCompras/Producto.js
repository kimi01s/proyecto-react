import { Component } from "react"

class Producto extends Component {
    render(){
        const { producto, agregarAlCarro } = this.props;
        return(
            <div className="col-12 col-md-4 col-lg-3 mb-3">
                <div className="card position-static shadow-sm rounded bg-white">
                    <img className="card-img-top img-thumbnail" alt={producto.name} src={producto.img}/>
                    <div className="card-header">
                        <h3 className="card-title">{producto.name}</h3>
                    </div>
                    <div className="card-body">
                        <div className="card-text">
                            <h1 className="lead">Precio: ${producto.price}</h1>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button 
                        className="btn btn-primary"
                        type="button"
                        onClick={()=>agregarAlCarro(producto)}
                        >Agregar</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Producto