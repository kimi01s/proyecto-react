import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";
import './Bubble.css'

class Carro extends Component {
  render() {
    const {carro, esCarroVisible, MostrarCarro} = this.props;
    const cantidad = carro.reduce((acc, el)=> acc + el.cantidad, 0);
    return (
      <div className="col">
        <button 
          type="button" 
          className="btn btn-success position-relative"
          onClick={MostrarCarro}
          >
          Carro
          { cantidad !== 0 
                  ? <BubbleAlert value={cantidad} />
                  : null
              }
        </button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>

    )
  }
}
export default Carro