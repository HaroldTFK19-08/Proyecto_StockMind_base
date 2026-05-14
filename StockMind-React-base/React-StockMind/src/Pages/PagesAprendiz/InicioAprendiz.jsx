import '../../StylesComponents/Global.css'
import { Link } from 'react-router-dom';
import '../../StylesComponents/StylesAprendiz/InicioAprendiz.css'
const InicioAprendiz = () => {
  return (
        /* Usamos este ID para que el CSS sea ultra-específico y no dane otras páginas */
        <div id="wrapper-inicio-aprendiz">
            <div className='body'>
                <div className='contenedorInicio'>
                    <main className='contenedorInicio'>
                        <section className='seccioninicio'>
                            <div className='contenido-centrado'>
                                <h2>¡Bienvenido a StockMind Aprendiz!</h2>
                                <p>Gestiona tus equipos asignados y mantén todo bajo control.</p>
                                
                                <div className="hero-acciones">
                                    <Link to="/reportes" className="boton-principal-aprendiz">
                                        <i className="bi bi-person-badge"></i> 
                                        <span>Ver Reportes</span>
                                    </Link>
                                </div>
                                <div className="hero-dividido"></div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
  )
}

export default InicioAprendiz
