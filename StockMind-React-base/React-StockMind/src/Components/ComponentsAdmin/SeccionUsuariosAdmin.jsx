import '../../StylesComponents/StylesAdmin/UsuariosAdmin.css'

const SeccionUsuariosAdmin = () => {
  return (
<main className="main-usu">
        <section className="cards-usu">
            <div className="card-usu">
                <div className="top-card-usu">
                    <div>
                        <h5 className="title-usu">TOTAL USUARIOS</h5>
                    </div>
                    <div className="icon-card-usu">
                        <i className="bi bi-people"></i>
                    </div>
                </div>
                <h2 className="number-usu">1,284</h2>
                <p className="stats-usu">+12% este mes</p>
            </div>
            <div className="card-usu">
                <div className="top-card-usu">
                    <div>
                        <h5 className="title-usu">INSTRUCTORES</h5>
                    </div>
                    <div className="icon-card-usu">
                        <i className="bi bi-mortarboard"></i>
                    </div>
                </div>
                <h2 className="number-usu">842</h2>
                <p className="stats-usu">Activos en 4 sedes</p>
            </div>
            <div className="card-usu card-pink-usu">
                <div className="top-card-usu">
                    <div>
                        <h5 className="title-usu">CUENTA-DANTES</h5>
                    </div>
                    <div className="icon-card-usu icon-pink-usu">
                        <i className="bi bi-clipboard-check"></i>
                    </div>
                </div>
                <h2 className="number-usu">156</h2>
                <p className="stats-usu">Responsables de inventario</p>
            </div>
            <div className="card-usu card-blue-usu">
                <div className="top-card-usu">
                    <div>
                        <h5 className="title-usu">APRENDICES</h5>
                    </div>
                    <div className="icon-card-usu icon-blue-usu">
                        <i className="bi bi-person-workspace"></i>
                    </div>
                </div>
                <h2 className="number-usu">2,540</h2>
                <p className="stats-usu">Aprendices activos</p>
            </div>
        </section>

        <section className="tabla-container-usu">
            <table className="tabla-usu">
                <thead className="thead-usu">
                    <tr className="tr-usu">
                        <th className="th-usu">USUARIO</th>
                        <th className="th-usu">ROLES</th>
                        <th className="th-usu">CENTRO FORMATIVO</th>
                        <th className="th-usu">ESTADO</th>
                    </tr>
                </thead>
                <tbody className="tbody-usu">
                    <tr className="tr-usu">
                        <td className="td-usu">
                            <div className="usuario-info-usu">
                                <img src="https://i.pravatar.cc/100?img=3" alt="" className="img-usu"/>
                                <div>
                                    <h4 className="name-usu">Carlos Alberto Ruiz</h4>
                                    <p className="email-usu">cruiz@sena.edu.co</p>
                                </div>
                            </div>
                        </td>
                        <td className="td-usu">
                            <div className="roles-usu">
                                <span className="badge-usu">INSTRUCTOR</span>
                                <span className="badge-usu">CUENTA-DANTE</span>
                            </div>
                        </td>
                        <td className="td-usu">
                            <strong className="centro-usu">Teleinformatica</strong>
                        </td>
                        <td className="td-usu">
                            <span className="estado-usu activo-usu">● Activo</span>
                        </td>
                    </tr>
                    <tr className="tr-usu">
                        <td className="td-usu">
                            <div className="usuario-info-usu">
                                <img src="https://i.pravatar.cc/100?img=5" alt="" className="img-usu"/>
                                <div>
                                    <h4 className="name-usu">Maria Fernanda Castro</h4>
                                    <p className="email-usu">mfcastro@sena.edu.co</p>
                                </div>
                            </div>
                        </td>
                        <td className="td-usu">
                            <div className="roles-usu">
                                <span className="badge-usu">INSTRUCTOR</span>
                            </div>
                        </td>
                        <td className="td-usu">
                            <strong className="centro-usu">Agropecuario</strong>
                        </td>
                        <td className="td-usu">
                            <span className="estado-usu activo-usu">● Activo</span>
                        </td>
                    </tr>
                    <tr className="tr-usu">
                        <td className="td-usu">
                            <div className="usuario-info-usu">
                                <div className="avatar-usu">JS</div>
                                <div>
                                    <h4 className="name-usu">Jorge Suarez</h4>
                                    <p className="email-usu">jsuarez@sena.edu.co</p>
                                </div>
                            </div>
                        </td>
                        <td className="td-usu">
                            <div className="roles-usu">
                                <span className="badge-usu">CUENTA-DANTE</span>
                                <span className="badge-usu">INSTRUCTOR</span>
                            </div>
                        </td>
                        <td className="td-usu">
                            <strong className="centro-usu">Comercio y Servicios</strong>
                        </td>
                        <td className="td-usu">
                            <span className="estado-usu inactivo-usu">● Inactivo</span>
                        </td>
                    </tr>
                    {/* ... Las demás filas siguen el mismo patrón con sufijo -usu */}
                </tbody>
            </table>
        </section>
    </main>
  )
}

export default SeccionUsuariosAdmin
