import '../../StylesComponents/Auth/Forms.css'

const Form = () => {
  return (
  <div className="panel-formulario">
    <a href="/Paginas_Stockmind/parte_inicial_StockMind/Inicio.html" className="btn-volver"> <i className="bi bi-arrow-left-short"></i> Volver </a>
    <div className="registro-header">
      <img src="" alt="" />
      <h1>Inicia Sesión</h1>
      </div>
      <form action="#">
        <div className="grupo-input input-con-icono">
          <i className="bi bi-envelope"></i> <input type="email" placeholder="Correo Electrónico" required/>
        </div>
          <div className="grupo-input input-con-icono">
            <i className="bi bi-lock"></i> <input type="password" placeholder="Contraseña" required/>
          </div>
            <div className="link-olvido">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
              <button type="submit" className="btn-registrar">INICIAR SESIÓN</button>
      </form>
  </div>
  )
}

export default Form
