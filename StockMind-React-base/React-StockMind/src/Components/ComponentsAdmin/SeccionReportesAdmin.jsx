import '../../StylesComponents/StylesAdmin/ReportesAdmin.css'

const SeccionReportesAdmin = () => {
  return (
    <main className="repor-container">
      <section className="repor-titulo-seccion">
        <div>
          <h1 className="repor-h1">Reportes</h1>
          <p className="repor-p-descripcion">Visión general del estado operativo y gestión de incidencias del almacén.</p>
        </div>
        <div>
          <button className="repor-btn-PDF">
            <div>
              <i className="bi bi-file-earmark-pdf repor-icono-pdf"></i>
            </div>
            <div>
              <p><strong>Generar PDF</strong></p>
            </div>
          </button>
        </div>
      </section>

      <section className="repor-resumen-grid">
        <div className="card-resumen-repor">
          <div className="repor-icono naranja">
            <i className="bi bi-exclamation-circle"></i>
          </div>
          <div className="repor-contenido">
            <span className="repor-badge alerta">+2 hoy</span>
            <h2 className="repor-h2">24</h2>
            <p className="repor-p">Fallas pendientes</p>
          </div>
        </div>

        <div className="card-resumen-repor">
          <div className="repor-icono azul">
            <i className="bi bi-arrow-repeat"></i>
          </div>
          <div className="repor-contenido">
            <span className="repor-badge proceso">Activo</span>
            <h2 className="repor-h2">18</h2>
            <p className="repor-p">En proceso</p>
          </div>
        </div>

        <div className="card-resumen-repor">
          <div className="repor-icono verde">
            <i className="bi bi-check-circle"></i>
          </div>
          <div className="repor-contenido">
            <span className="repor-badge ok">94% efic.</span>
            <h2 className="repor-h2">142</h2>
            <p className="repor-p">Fallas solucionadas</p>
          </div>
        </div>

        <div className="card-resumen-repor">
          <div className="repor-icono gris">
            <i className="bi bi-file-earmark-text"></i>
          </div>
          <div className="repor-contenido">
            <span className="repor-badge neutro">Mensual</span>
            <h2 className="repor-h2">184</h2>
            <p className="repor-p">Total reportes</p>
          </div>
        </div>
      </section>

      <section className="repor-tabla-seccion">
        <div className="repor-header-tabla">
          <h3 className="repor-h3">Reportes recientes</h3>
          
          <div className="repor-filtros">
              <button className="repor-btn-filtro"><i className="bi bi-funnel"></i> Filtrar</button>
              
              <button className="repor-btn-filtro"><i className="bi bi-grid"></i> Todas las Categorías</button>
              
              <button className="repor-btn-filtro"><i className="bi bi-check-circle"></i> Todos los Estados</button>
              <a href="#" className="repor-link-historial">Ver historial completo</a>
              
          </div>
        </div>

        <table className="repor-tabla">
          <thead className="repor-thead">
            <tr>
              <th className="repor-th">Elemento</th>
              <th className="repor-th">Categoría</th>
              <th className="repor-th">Centro de formación</th>
              <th className="repor-th">Ambiente</th>
              <th className="repor-th">Estado</th>
              <th className="repor-th">Fecha</th>
              <th className="repor-th">Acciones</th>
            </tr>
          </thead>
          <tbody className="repor-tbody">
            {/* Ejemplo de fila */}
            <tr className="repor-tr">
              <td className="repor-td">
                <div className="repor-item-flex">
                  <i className="bi bi-tools repor-i"></i>
                  <span>Martillo</span>
                </div>
              </td>
              <td className="repor-td">Herramientas</td>
              <td className="repor-td">Centro Teleinformatica</td>
              <td className="repor-td">Ambiente 201</td>
              <td className="repor-td">
                <span className="repor-estado pendiente">Pendiente</span>
              </td>
              <td className="repor-td">24-10-2026</td>
              <td className="repor-td repor-acciones">
                <i className="bi bi-eye repor-btn-accion"></i>
                <i className="bi bi-pencil repor-btn-accion"></i>
              </td>
            </tr>
            {/* ... Resto de las filas siguen el mismo patrón ... */}
            <tr className="repor-tr">
              <td className="repor-td">
                <div className="repor-item-flex">
                  <i className="bi bi-lightning repor-i"></i>
                  <span>Taladro Percutor Bosch</span>
                </div>
              </td>
              <td className="repor-td">Herramientas Eléctricas</td>
              <td className="repor-td">Centro Textil</td>
              <td className="repor-td">Mantenimiento</td>
              <td className="repor-td">
                <span className="repor-estado proceso">En proceso</span>
              </td>
              <td className="repor-td">23 Oct, 2023</td>
              <td className="repor-td repor-acciones">
                <i className="bi bi-eye repor-btn-accion"></i>
                <i className="bi bi-pencil repor-btn-accion"></i>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="repor-footer-tabla">
          <span className="repor-info-paginacion">
            <p>Mostrando 3 de 184 reportes detallados</p>
          </span>
          <div className="repor-paginacion-btns">
            <button className="repor-btn-pag activo-repor">1</button>
            <button className="repor-btn-pag">2</button>
            <button className="repor-btn-pag">3</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SeccionReportesAdmin