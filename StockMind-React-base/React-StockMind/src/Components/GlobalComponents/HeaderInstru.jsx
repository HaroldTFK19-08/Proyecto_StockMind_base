import '../../StylesComponents/StylesInstru/HeaderInstru.css';
import { Link } from 'react-router-dom';
import PerfilInstructor from '../../assets/perfilinstructor.jpg';

const HeaderInstru = () => {
  return (
    <header className="Instru-header">
      <div className="Instru-barra-buscador">
        <input 
          type="text" 
          placeholder="Buscar..." 
          minLength="1" 
          maxLength="50"
          className="Instru-input-buscador"
        />
        <i className="bi bi-search Instru-icono-busqueda"></i>
      </div>

      <div className="Instru-derecha">
        <div className="Instru-iconos">
          <Link to="/notificacionesinstructor" className="Instru-link-notificaciones">
            <i className="bi bi-bell"></i>
          </Link>
          <i className="bi bi-gear Instru-icono-ajustes"></i>
        </div>

        <Link to="/perfilinstructor" className="Instru-perfil" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="Instru-info">
            <span className="Instru-nombre">
              <p><strong>Santiago Arias</strong></p>
            </span>
            <small className="Instru-rol">INSTRUCTOR Sena</small>
          </div>
          
          <div className="Instru-avatar">
            <img 
              src={PerfilInstructor} 
              alt="Instructor Profile" 
              className="Instru-imagen-avatar"
            />
          </div>
        </Link>
      </div>
    </header>
  )
}

export default HeaderInstru