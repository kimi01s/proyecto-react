import { Component } from "react";
import Carro from "./Carro";

class NavCarro extends Component {
    render(){
        const {carro, esCarroVisible, MostrarCarro} = this.props;
        return(
            <div className="col-lg-12"> 
                <div className="row">
                    <div className="col-8 col-md-10 col-lg-10 col-xl-11">
                        <h1>Tienda</h1>
                    </div>
                    <Carro 
                    carro={carro}
                    esCarroVisible={esCarroVisible}
                    MostrarCarro={MostrarCarro}
                    />
                </div>
            </div>
        )
    }
}

export default NavCarro