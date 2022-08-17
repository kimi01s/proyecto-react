import { Component } from "react";
import Carro from "./Carro";

class NavCarro extends Component {
    render(){
        const {carro, esCarroVisible, MostrarCarro} = this.props;
        return(
            <div className="row">
                <div className="col-lg-1 col-1">
                    <h1>Tienda</h1>
                </div>
                <Carro 
                    carro={carro}
                    esCarroVisible={esCarroVisible}
                    MostrarCarro={MostrarCarro}
                />
            </div>
        )
    }
}

export default NavCarro