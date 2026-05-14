import '../../StylesComponents/Layout/Header.css'
import { Link } from 'react-router-dom';
import StockMind from '../../assets/LOGO FULL.svg'
import '../../StylesComponents/Global.css'
const Header = () => {
  return (
    <>
    <header className='header-principal'>
        <div className="logo">
            <img src={StockMind} alt="Logo StockMind" />
            </div>
            
            <nav className="nav">
                <Link to="/" className="active">Inicio</Link>
                    <a href="#Nosotros">Nosotros</a>
                    <a href="#Servicios">Servicios</a>
                    <a href="#contacto">Contacto</a>
            </nav>
            <div className="boton-acceder">
                <Link to="/Login" className="boton-primero">Acceder</Link>
            </div>
    </header>
    </>
  )
}

export default Header
