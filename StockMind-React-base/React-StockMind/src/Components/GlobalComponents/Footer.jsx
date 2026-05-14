import '../../StylesComponents/Layout/Footer.css'

const Footer = () => {
  return (
    <>
    <footer className='footer'>
        <div className="footer-grid">
            <div className="footer-principal">
                <img src="/Capa 1.svg" alt="StockMind" className='footer-logoSena'/>
                <p className="footer-parrafo">
                    Solución integral para la gestión administrativa de bienes y suministros del 
                    <strong>Servicio Nacional de Aprendizaje (SENA)</strong>.
                </p>
                </div>
                <div className="footer-columna">
                    <h4>Plataforma</h4>
                    <ul>
                        <li>Uso exclusivo SENA</li>
                        <li>Control de Inventario</li>
                        <li>Gestión de Elementos</li>
                        <li>Toma de Decisiones</li>
                    </ul>
                </div>
                    
                <div className="footer-col">
                    <h4>Integral</h4>
                    <ul>
                        <li>Alta Disponibilidad</li>
                        <li>Tiempo Real</li>
                        <li>Integridad de Datos</li>
                        <li>Escalabilidad</li>
                    </ul>
                </div>

        </div>
            <div className="footer-copyright">
                <div className="copyright-texto">
                    <span>© 2026 STOCKMIND | ADSO | SENA</span>
                </div>
                    <div className="copyright-location">
                        <span>Colombia</span>
                        <p>&#x1F1E8;&#x1F1F4;</p>
                    </div>
            </div>
    </footer>
    </>
  )
}

export default Footer
