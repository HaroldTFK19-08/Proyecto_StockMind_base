import "../../StylesComponents/StylesAdmin/NavbarAdmin.css"
import { NavLink } from 'react-router-dom'
import StockMindd from '../../assets/Capa 1.svg';

const NavbarAdmin = () => {
  return (

    <aside className="aside-admin">
            <div className="izquierda-admin">
                <div>
                    <img 
                        style={{ width: "160px", height: "auto", padding: "20px 0" }} 
                        src={StockMindd} 
                        alt="StockMind" 
                    />
                </div>
            </div>
            <div className="nav-admin">
                <nav>
                    <ul>
                        <NavLink 
                            to="/inicioadmin" 
                            className={({ isActive }) => isActive ? "nav-item-admin selected" : "nav-item-admin"}
                        >
                            <li><i className="bi bi-house-door"></i>Inicio</li>
                        </NavLink>

                        <NavLink 
                            to="/sedesadmin" 
                            className={({ isActive }) => isActive ? "nav-item-admin selected" : "nav-item-admin"}
                        >
                            <li><i className="bi bi-building"></i>Centros</li>
                        </NavLink>

                        <NavLink 
                            to="/inventarioadmin" 
                            className={({ isActive }) => isActive ? "nav-item-admin selected" : "nav-item-admin"}
                        >
                            <li><i className="bi bi-box-seam"></i>Inventario</li>
                        </NavLink>

                        <NavLink 
                            to="/movimientosadmin" 
                            className={({ isActive }) => isActive ? "nav-item-admin selected" : "nav-item-admin"}
                        >
                            <li><i className="bi bi-box-arrow-in-right"></i>Movimientos</li>
                        </NavLink>

                        <NavLink 
                            to="/reportesadmin" 
                            className={({ isActive }) => isActive ? "nav-item-admin selected" : "nav-item-admin"}
                        >
                            <li><i className="bi bi-file-earmark-bar-graph"></i>Reportes</li>
                        </NavLink>

                        <NavLink 
                            to="/usuariosadmin" 
                            className={({ isActive }) => isActive ? "nav-item-admin selected" : "nav-item-admin"}
                        >
                            <li><i className="bi bi-people"></i>Usuarios</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </aside>
  )
}

export default NavbarAdmin
