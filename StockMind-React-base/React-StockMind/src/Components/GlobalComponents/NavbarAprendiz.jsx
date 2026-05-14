import '../../StylesComponents/StylesAprendiz/NavbarAprendiz.css';
import { NavLink } from 'react-router-dom'
import StockMind from '../../assets/Capa 1.svg';
const NavbarAprendiz = () => {
  return (
    <aside>
        <div className="izquierda">
                <div>
                    <img style={{ width: "160px", height: "160px" }} src={StockMind} alt="StockMind" />
                </div>
            </div>
            <div className="nav">
                <nav>
                    <ul>
                        {/* El NavLink envuelve el contenido. Si isActive es true, pone la clase 'selected' */}
                        <NavLink to="/inicioaprendiz" className={({ isActive }) => isActive ? "nav-item selected" : "nav-item"}>
                            <li><i className="bi bi-house-door"></i>Inicio</li>
                        </NavLink>
                        <NavLink to="/reportarDanos" className={({ isActive }) => isActive ? "nav-item selected" : "nav-item"}>
                            <li><i className="bi bi-exclamation-triangle"></i>Reportar Daño</li>
                        </NavLink>

                        <NavLink to="/reportes" className={({ isActive }) => isActive ? "nav-item selected" : "nav-item"}>
                            <li><i className="bi bi-file-check"></i>Reportes</li>
                        </NavLink>

                        <NavLink to="/miselementos" className={({ isActive }) => isActive ? "nav-item selected" : "nav-item"}>
                            <li><i className="bi bi-person-check-fill"></i>Mis elementos</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
    </aside>
  )
}

export default NavbarAprendiz
