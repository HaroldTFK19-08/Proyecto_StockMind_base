import '../../StylesComponents/Auth/Login.css'
import '../../StylesComponents/Global.css'
import Sena from '../../assets/SENAblanco.svg'
import {Link} from 'react-router-dom'
import StockMind from '../../assets/Capa 1.svg'

const Login = () => {
  return (
      <div className="pantalla-dividida1">
            <div className="tarjeta-contenedor1">
                <Link title="Volver" to="/" className="btn-volver">
                        <i className="bi bi-arrow-left-short"></i> Volver
                </Link>
                <div className="panel-formulario1"> 
                    
                    <div className="registro-header">
                        <img src={StockMind} alt="StockMind" className="logo-stockmind"/>
                        <h1>Inicia Sesión</h1>
                    </div>
                    <form id="loginForm">
                        <div className="input-con-icono1">
                            <i className="bi bi-envelope"></i>
                            <input id="loginEmail" type="email" placeholder="Correo Electrónico" required/>
                        </div>
                        <div className="input-con-icono1">
                            <i className="bi bi-lock"></i>
                            <input id="loginPassword" type="password" placeholder="Contraseña" required/>
                        </div>
                        <div className="link-olvido">
                            <a href="#">¿Olvidaste tu contraseña?</a>
                        </div>
                        <Link to="/inicioaprendiz" >
                            <button type="submit" className="btn-registrar">INICIAR SESIÓN</button>
                        </Link>
                    </form>
                </div>
                <div className="login-verde">
                    <div className="contenido-lateral">
                        <h2>¡Bienvenido a StockMind!</h2>
                        <p>Ingresa tus datos personales y comienza tu jornada con nosotros.</p>
                        <Link to="/roles" className="btn-outline">REGISTRARSE</Link>
                        <div className="logo-sena">
                            <img src={Sena} alt="SENA" className="logo-sena-blanco"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login
