import '../../StylesComponents/StylesInstru/NavbarInstru.css'
import { NavLink } from 'react-router-dom'
import StockMindd from '../../assets/Capa 1.svg';

const NavbarInstru = () => {
  return (
    
        <aside className="aside-instructor">
                <div className="izquierda-instructor">
                    <div>
                        <img 
                            style={{ width: "160px", height: "auto", padding: "20px 0" }} 
                            src={StockMindd} 
                            alt="StockMind" 
                        />
                    </div>
                </div>
                <div className="nav-instructor">
                    <nav>
                        <ul>
                            <NavLink 
                                to="/dashboardinstructor" 
                                className={({ isActive }) => isActive ? "nav-item-instructor selected" : "nav-item-instructor"}
                            >
                                <li><i className="bi bi-house-door"></i>Dashboard</li>
                            </NavLink>
    
                            <NavLink 
                                to="/ambientesinstructor" 
                                className={({ isActive }) => isActive ? "nav-item-instructor selected" : "nav-item-instructor"}
                            >
                                <li><i className="bi bi-building"></i>Ambientes</li>
                            </NavLink>
    
                            <NavLink 
                                to="/historialreportes" 
                                className={({ isActive }) => isActive ? "nav-item-instructor selected" : "nav-item-instructor"}
                            >
                                <li><i className="bi bi-box-seam"></i>Historial De Reportes</li>
                            </NavLink>

                        </ul>
                    </nav>
                </div>
            </aside>
  )
}

export default NavbarInstru
