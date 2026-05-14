import '../../StylesComponents/StylesAdmin/HeaderAdmin.css';
import Mujer from '../../assets/mujer.avif';
import { Link } from 'react-router-dom';

const HeaderAdmin = () => {
  return (
    <header className="header-administrador">
      <div className="barra-buscador-admin">
        <input 
          type="text" 
          placeholder="Buscar elementos o centros de formacion" 
          minLength="1" 
          maxLength="50"
          className="input-buscador-admin"
        />
        <i className="bi bi-search icono-busqueda-admin"></i>
      </div>

      <div className="derecha-admin">
        <div className="iconos-admin">
          <Link to="/notificacionesadmin" className="link-notificaciones-admin">
            <i className="bi bi-bell"></i>
          </Link>
          <i className="bi bi-gear icono-ajustes-admin"></i>
        </div>

        <Link to="/perfiladmin" className="perfil-admin" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="info-admin">
            <span className="nombre-admin">
              <p><strong>ADMIN Sena</strong></p>
            </span>
            <small className="rol-admin">ADMIN PRINCIPAL</small>
          </div>
          
          <div className="avatar-admin">
            <img 
              src={Mujer} 
              alt="Admin Profile" 
              className="imagen-avatar-admin"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default HeaderAdmin;