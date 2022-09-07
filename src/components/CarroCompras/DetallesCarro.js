import { Component } from "react";

class DetallesCarro extends Component{
    render(){
        const {carro} = this.props;
        console.log(carro)
        return(
            <div  
            className="row bg-white text-dark mt-3 w-25 position-absolute top-40 end-0 shadow p-3 me-5 mb-5 bg-body rounded">
                <ul className="list-group">
                    <div className="col-lg-12">
                    {carro.map(x=>
                        <li key={x.name} className="list-group-item d-flex justify-content-between">
                            <div className="col-lg-7">
                            <img alt="..." src={x.img} className="w-50 img-thumbnail border-0"/>
                            </div>
                            <div className="col-lg-4">
                                <span>{x.name}</span>
                            </div>
                            <div className="col-lg-1">
                                <span>{x.cantidad}</span>
                            </div>
                        </li>
                    )
                    }
                    </div>
                </ul>
            </div>
        )
    }
}
export default DetallesCarro;