import { Component } from "react"

class Producto extends Component {
    render(){
        const { producto, agregarAlCarro } = this.props;
        return(
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 my-2">
                    <div className="card position-static shadow-sm m-0 p-0 bg-white rounded text-dark bg-light">
                        <img src={producto.img} className="img-thumbnail" alt="..."/>
                        <div className="card-header">
                        <h5 className="card-title">{producto.name}</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{producto.price}</p>
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