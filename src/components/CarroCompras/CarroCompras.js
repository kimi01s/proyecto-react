import { Component } from "react";
import Productos from '../CarroCompras/Productos'
import NavCarro from '../CarroCompras/NavCarro'
import './Bubble.css'

class CarroCompras extends Component {
    state={
      productos:[
        {name: 'Tomate', price: 1500, img:'Productos/tomate.jpg'},
        {name: 'Arbejas', price: 2500, img:'Productos/arbejas.jpg'},
        {name: 'Lechuga', price: 500, img:'Productos/lechuga.jpg'},
      ],
      carro: [],
      esCarroVisible: false,
    } 
  
    agregarAlCarro = (producto) => {
      const { carro }= this.state;
  
      if(carro.find(x => x.name === producto.name)){
        const newCarro = carro.map(x => x.name === producto.name ? 
          ({
            ...x,
            cantidad: x.cantidad + 1
          })
          : x)
  
          return this.setState({carro: newCarro}) 
         
      }
      return this.setState({
        carro: this.state.carro.concat({
  
          ...producto,
          cantidad:1,
        })
      })
  
    }
  
    MostrarCarro =()=>{
      if(!this.state.carro.length){
        return
      }
      this.setState({esCarroVisible: !this.state.esCarroVisible})
    }
    render(){
      const {esCarroVisible} = this.state;
      return(
            <div className="container-fluid">
                <div className="row mt-2">
                  <NavCarro
                carro = {this.state.carro} 
                esCarroVisible ={esCarroVisible}
                MostrarCarro={this.MostrarCarro}
                />
                  <div className="col-lg-12">
                    <Productos 
                      agregarAlCarro={this.agregarAlCarro}
                      productos={this.state.productos}
                      />
                  </div>
                </div>
                
            </div>
      )
    }
  }
  export default CarroCompras