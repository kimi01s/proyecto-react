import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";
import './Bubble.css'

class Carro extends Component {
  render() {
    const {carro, esCarroVisible, MostrarCarro} = this.props;
    const cantidad = carro.reduce((acc, el)=> acc + el.cantidad, 0);
    return (
      <div className="col-lg-1 offset-lg-10 col-1 offset-8">
        <span className="position-relative Bubble">
            { cantidad !== 0 
                ? <BubbleAlert value={cantidad} />
                : null
            }</span>
            
            <button 
            className="btn btn-success"
            onClick={MostrarCarro}
            >Carro</button>
            {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    );
  }
}
export default Carro;