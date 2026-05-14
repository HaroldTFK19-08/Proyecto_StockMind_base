import { Link } from 'react-router-dom'
import Instructor from '../../assets/InstructorLogo.png'
import '../../StylesComponents/Auth/PanelLeft.css'

const PanelLeft = () => {
  return (
        <>
            <div className="panel-izquierdo">
                <div className="contenido-izquierdo">
                    <div className="avatar-instructor">
                        <img src={Instructor} className="avatar-img"/>
                    </div>
                    <h2>¡Bienvenido Instructor!</h2>
                    <nav className="menu-lateral">
                        <ul>
                            <li>
                                <Link to="/" className="link-irInicio">
                                    <i className="bi bi-house-door "></i>
                                    <span>Ir al Inicio</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Login">
                                    <i className="bi bi-box-arrow-in-right"></i>
                                    <span>Iniciar Sesión</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/roles">
                                    <i className="bi bi-arrow-left-circle"></i>
                                    <span>Cambiar Rol</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" id="btnAyuda">
                                    <i className="bi bi-question-circle"></i>
                                    <span>Ayuda</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
  )
}

export default PanelLeft
