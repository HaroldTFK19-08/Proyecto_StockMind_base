import '../../StylesComponents/StylesAdmin/InicioAdmin.css'

const SeccionInicioAdmin = () => {
  return (
<main className="main-admin">
    <section className="contenedor-admin">
        <section className="bienvenida-admin">
            <h1 className="titulo-bienvenida-admin">Bienvenido ADMIN</h1>
            <br/>
            <p className="descripcion-admin">Gestión Eficiente del inventario y control de elementos en cada centro de formación</p>
        </section>

        <section className="cards-admin">
            <div className="card-admin">
                <div className="icono-card-admin">
                    <i className="bi bi-box"></i>
                </div>
                <div className="info-card-admin">
                    <span>ELEMENTOS TOTALES</span>
                    <h2>2,000</h2>
                </div>
            </div>

            <div className="card-admin">
                <div className="icono-card-admin">
                    <i className="bi bi-mortarboard"></i>
                </div>
                <div className="info-card-admin">
                    <span>CENTROS FORMATIVOS</span>
                    <h2>4</h2>
                </div>
            </div>

            <div className="card-admin">
                <div className="icono-card-admin">
                    <i className="bi bi-person-badge"></i>
                </div>
                <div className="info-card-admin">
                    <span>N° CUENTADANTES</span>
                    <h2>400</h2>
                </div>
            </div>

            <div className="card-admin">
                <div className="icono-card-admin">
                    <i className="bi bi-people"></i>
                </div>
                <div className="info-card-admin">
                    <span>N° APRENDICES</span>
                    <h2>3,000</h2>
                </div>
            </div>
        </section>

        <section className="tabla-container-admin">
            <div className="tabla-header-admin">
                <div className="titulo-tabla-admin">
                    <h3>Elementos actuales</h3>
                    <span className="estado-admin">ACTUALIZADO</span>
                </div>
                <div className="acciones-header-admin">
                    <button className="btn-filtrar-admin"><i className="bi bi-funnel"></i> Filtrar</button>
                    <button className="btn-exportar-admin"><i className="bi bi-download"></i> Exportar</button>
                </div>
            </div>

            <table className="tabla-elementos-admin">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre del elemento</th>
                        <th>Centro de formación</th>
                        <th>Ambiente</th>
                        <th>Cuentadante</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="id-admin">00211</td>
                        <td><strong>Monitor Dell UltraSharp 27"</strong></td>
                        <td>Centro Comercio y Servicios</td>
                        <td>Ambiente 201</td>
                        <td>Carlos Mario Restrepo</td>
                        <td className="acciones-admin">
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-pencil"></i>
                            <i className="bi bi-trash"></i>
                        </td>
                    </tr>
                    <tr>
                        <td className="id-admin">00311</td>
                        <td><strong>Portátil Lenovo ThinkPad P15</strong></td>
                        <td>Centro de Teleinformatica</td>
                        <td>Ambiente 201</td>
                        <td>Ana María Vélez</td>
                        <td className="acciones-admin">
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-pencil"></i>
                            <i className="bi bi-trash"></i>
                        </td>
                    </tr>
                    {/* ... Resto de las filas siguen el mismo patrón ... */}
                </tbody>
            </table>

            <div className="tabla-footer-admin">
                <span className="conteo-admin">Mostrando 5 de 2,000 elementos</span>
                <div className="paginacion-admin">
                    <button className="btn-pag-admin activo-admin">1</button>
                    <button className="btn-pag-admin">2</button>
                    <button className="btn-pag-admin">3</button>
                </div>
            </div>
        </section>    
    </section>
</main>
  )
}

export default SeccionInicioAdmin
