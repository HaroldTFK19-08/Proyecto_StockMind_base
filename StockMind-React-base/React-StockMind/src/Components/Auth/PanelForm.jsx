import '../../StylesComponents/Auth/PanelForm.css'
import StockMind from '../../assets/Capa 1.svg'

const PanelForm = () => {
  return (
    <>
        <div className="panel-formulario">
                <div className="registro-header">
                    <img src={StockMind} className="logo-stockmind"/>
                    <h1>Crear Cuenta</h1>
                </div>

                <form id="registerInstructorForm" action="#">
                    <div className="fila-input">
                        <div className="grupo-input">
                            <i className="bi bi-person"></i>
                            <input type="text" placeholder="Primer Nombre" required/>
                        </div>
                        <div className="grupo-input">
                            <i className="bi bi-person"></i>
                            <input type="text" placeholder="Segundo Nombre"/>
                        </div>
                    </div>

                    <div className="fila-input">
                        <div className="grupo-input">
                            <i className="bi bi-person-badge"></i>
                            <input type="text" placeholder="Primer Apellido" required/>
                        </div>
                        <div className="grupo-input">
                            <i className="bi bi-person-badge"></i>
                            <input type="text" placeholder="Segundo Apellido"/>
                        </div>
                    </div>

                    <div className="fila-input">
                        <div className="grupo-input" style={{flex: 0.4}}>
                            <select className="select-input" required>
                                <option value="C.C.">C.C.</option>
                                <option value="C.E.">C.E.</option>
                            </select>
                        </div>
                        <div className="grupo-input" style={{flex: 1}}>
                            <i className="bi bi-card-heading"></i>
                            <input type="text" placeholder="Número de Identificación" required/>
                        </div>
                    </div>
                    
                    <div className="fila-input">
                        <div className="grupo-input">
                            <i className="bi bi-telephone"></i>
                            <input type="tel" placeholder="Teléfono" required/>
                        </div>
                        
                        <div className="grupo-input">
                            <i className="bi bi-geo-alt"></i> 
                            <select className="select-input" required>
                                <option value="" disabled selected>Seleccione Centro</option>
                                <option value="agropecuario">Centro Agropecuario - Regional Cauca</option>
                                <option value="ctpi">CTPI - Teleinformática y Producción Industrial</option>
                                <option value="comercio">Centro de Comercio y Servicios</option>
                            </select>
                        </div>
                    </div>

                    <div className="grupo-input">
                        <i className="bi bi-envelope"></i>
                        <input id="registerInstructorEmail" type="email" placeholder="Correo" required/>
                    </div>

                    <div className="grupo-input">
                        <i className="bi bi-lock"></i>
                        <input id="registerInstructorPassword" type="password" placeholder="Contraseña" required/>
                    </div>
                    
                    <Link to="/perfilinstructor">
                    <button type="submit" className="btn-registrar">REGISTRARSE</button>
                    </Link>
                </form>
                <p id="authMessage" aria-live="polite"></p>
            </div>
        </>
  )
}

export default PanelForm
