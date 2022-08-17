import {NavLink} from 'react-router-dom'

const NavBar =()=>{
    let activeClassName='navbar-brand active'
    let ClassName='navbar-brand'
    return(
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <div className="container-fuid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className="navbar-brand active" href="../App">Inicio</a> */}
                            <NavLink 
                            className={({ isActive }) => (isActive ? activeClassName : ClassName)}
                            to="/">Inicio</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink 
                            className={({ isActive }) => (isActive ? activeClassName : ClassName)}
                            to="CarroCompras">Productos</NavLink>
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
                        <li className="nav-item">
                            <NavLink 
                            className={({ isActive }) => (isActive ? activeClassName : ClassName)}
                            to="Formulario">Formulario</NavLink>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar