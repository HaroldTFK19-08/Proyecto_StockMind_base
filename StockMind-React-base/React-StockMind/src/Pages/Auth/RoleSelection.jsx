import { Link } from 'react-router-dom'
import '../../StylesComponents/Global.css'
import '../../StylesComponents/Auth/RoleSelection.css'
import StockMind from '../../assets/Capa 1.svg'

const RoleSelection = () => {
  return (
        <div className="pantalla-dividida-central">
            <div className="tarjeta-contenedor rol-contenedor">
                
                <div className="header-rol">
                    <img src={StockMind} alt="Logo StockMind" />
                    <h1>Bienvenido, Miembro SENA</h1>
                    <p>
                        Por favor, para continuar, selecciona el rol con el que interactuarás en el sistema.
                    </p>
                </div>

                <div className="grid-roles">
                    
                    <Link to="/recordaprendiz" className="opcion-rol">
                        <div className="icono-rol">
                            <i className="bi bi-mortarboard"></i>
                        </div>
                        <span>APRENDIZ</span>
                    </Link>

                    <Link to="/recordinstructor" className="opcion-rol">
                        <div className="icono-rol">
                            <i className="bi bi-person-workspace"></i>
                        </div>
                        <span>INSTRUCTOR</span>
                    </Link>

                </div>

                <div className="footer-rol">
                    <p>
                        ¿Ya tienes cuenta? <Link to="/Login">Iniciar Sesión</Link>
                    </p>
                </div>

            </div>
        </div>
  )
}

export default RoleSelection
