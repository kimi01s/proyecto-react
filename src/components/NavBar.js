import {NavLink} from 'react-router-dom'

const NavBar =()=>{
    let activeClassName='nav-link active text-dark'
    let ClassName='nav-link'
    return(
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <div className="container-fluid">
                
                <NavLink className='navbar-brand' to='/'/>
                <button className="navbar-toggler mb-2" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-tabs me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink 
                            className={({ isActive }) => (isActive ? activeClassName : ClassName)}
                            to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            className={({ isActive }) => (isActive ? activeClassName : ClassName)}
                            to="CarroCompras">Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            className={({ isActive }) => (isActive ? activeClassName : ClassName)}
                             to="Formulario">Formulario</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            className={({ isActive }) => (isActive ? activeClassName : ClassName)}
                            to="Buscar-img">Buscar Imágenes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                            className={({ isActive }) => (isActive ? activeClassName : ClassName)}
                            to="IndexInteres">Interés Compuesto</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar