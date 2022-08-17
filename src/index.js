import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import NavBar from './components/NavBar'
// import Formulario from './components/Formulario/Formulario'
import CarroCompra from './components/CarroCompras/CarroCompras'
import BuscarImg from './components/Buscar-img/Buscar-img'
// import InteresCompuesto from './components/Interes-compuesto/IndexInteres'
import reportWebVitals from './reportWebVitals';
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/bootstrap/dist/js/bootstrap.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <NavBar />
        <Routes>
          <Route path="*" element={<App/>} />
          {/* <Route path="/Formulario" element={<Formulario/>} /> */}
          <Route path="/Buscar-img" element={<BuscarImg/>} />
          <Route path="/CarroCompras" element={<CarroCompra/>} />
          {/* <Route path="/IndexInteres" element={<InteresCompuesto/>} /> */}
        </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
