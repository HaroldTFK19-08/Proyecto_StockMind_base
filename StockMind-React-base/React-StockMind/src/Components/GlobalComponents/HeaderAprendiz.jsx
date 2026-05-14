import '../../StylesComponents/StylesAprendiz/HeaderAprendiz.css'
import Aprendizlogo from '../../assets/aprendiz-perfil.png'
import { Link } from 'react-router-dom'

const HeaderAprendiz = () => {
  return (
    <header className="cabecera-superior-usuario">
      <div className="seccion-derecha-cabecera">

        <div className="iconos-notificaciones-perfil">

         
       <Link to="/notificacionesaprendiz" className='campana-contenedor'>
        <i className="bi bi-bell"></i>
        <span className="notificacion-punto"></span>
        </Link>

            <i className="bi bi-gear"></i>
            
        </div>

        
       <Link to='/perfilaprendiz' className="mini-perfil-contenedor" style={{ textDecoration: 'none' }}>
          <div className="informacion-basica-usuario">
            <span className="nombre-perfil-principal">Aprendiz SENA</span>
            <small className="nombre-real-usuario">Andrés Estrada</small>
          </div>

          <div className="avatar-aprendiz-vista">
            <img src={Aprendizlogo} alt="Andres Estrada" className="imagen-logoAprendiz" />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default HeaderAprendiz;