import '../../StylesComponents/Auth/PanelSide.css'

const PanelSide = () => {
  return (
        <div>
            <div className="contenido-lateral">
                <h2>¡Bienvenido a StockMind!</h2>
                <p>Ingresa tus datos personales y comienza tu jornada con nosotros.</p>
                <a href="/Paginas_Stockmind/parte_inicial_StockMind/RegistroPaso01.html" className="btn-outline">REGISTRARSE</a>
                <div className="logo-sena">
                    <img src="/StockMind_React/STOCKMIND/STOCKMIND/SVG/LOGO FULL.svg" alt="" className="logo-sena-blanco" />
                </div>
            </div>
        </div>
  )
}

export default PanelSide
