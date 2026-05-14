import '../../StylesComponents/StylesAdmin/Centro01.css'

const SeccionCentro01 = () => {
  // Datos de los ambientes para renderizar dinámicamente
  const ambientes = [
    {
      id: "101",
      nombre: "Ambiente 101",
      area: "SOFTWARE",
      capacidad: 45,
      equipos: 27,
      otros: 18,
      estado: "ACTIVO",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZxMxyxMnx8W5DA8Y0_svarvPAOBdobOqnw&s"
    },
    {
      id: "102",
      nombre: "Ambiente 102",
      area: "REDES Y TELECOM.",
      capacidad: 30,
      equipos: 20,
      otros: 10,
      estado: "ACTIVO",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZxMxyxMnx8W5DA8Y0_svarvPAOBdobOqnw&s"
    },
    {
      id: "103",
      nombre: "Ambiente 103",
      area: "MULTIMEDIA",
      capacidad: 40,
      equipos: 35,
      otros: 5,
      estado: "MANTENIMIENTO",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZxMxyxMnx8W5DA8Y0_svarvPAOBdobOqnw&s"
    }
  ];

  return (
    <main className="main-centro01">
      <section className="parte-inicial-centro01">
        <div>
          <h1>Centro de Comercio y Servicios</h1>
          <p>Ambientes pertenecientes a este centro de formación</p>
        </div>
        <div>
          <button className="boton-filtro-centro01">
            <i className="bi bi-filter-left icono-boton"></i>Filtrar
          </button>
          <button className="boton-agregar-centro01">+ Agregar Ambiente</button>
        </div>
      </section>

      <section className="seccion-tarjetas-centro01">
        <div className="tarjetas-centro01">
          {ambientes.map((ambiente) => (
            <div className="tarjeta-centro01" key={ambiente.id}>
              <div className="tarjeta-cabecera-centro01">
                <img 
                  src={ambiente.imagen} 
                  alt={ambiente.nombre} 
                  className="tarjeta-imagen-centro01"
                />
                <span className={`estado-centro01 ${ambiente.estado === 'ACTIVO' ? 'activo-centro01' : 'mantenimiento-centro01'}`}>
                  ● {ambiente.estado}
                </span>
              </div>

              <div className="tarjeta-cuerpo-centro01">
                <div className="fila-titulo-centro01">
                  <div className="grupo-titulo-centro01">
                    <h3 className="titulo-ambiente-centro01">{ambiente.nombre}</h3>
                    <p className="subtitulo-ambiente-centro01">{ambiente.area}</p>
                  </div>
                  <div className="grupo-capacidad-centro01">
                    <span className="capacidad-numero-centro01">{ambiente.capacidad}</span>
                    <span className="capacidad-etiqueta-centro01">TOTAL</span>
                  </div>
                </div>

                <div className="lista-equipos-centro01">
                  <div className="item-equipo-centro01">
                    <div className="info-equipo-centro01">
                      <i className="bi bi-laptop icono-equipo"></i>
                      <span className="nombre-equipo-centro01">Equipos de cómputo</span>
                    </div>
                    <span className="cantidad-equipo-centro01">{ambiente.equipos}</span>
                  </div>
                  <div className="item-equipo-centro01">
                    <div className="info-equipo-centro01">
                      <i className="bi bi-box-seam"></i>
                      <span className="nombre-equipo-centro01">Otros elementos</span>
                    </div>
                    <span className="cantidad-equipo-centro01">{ambiente.otros}</span>
                  </div>
                </div>
              </div>

              <div className="tarjeta-pie-centro01">
                <a href="#" className="boton-accion-centro01">
                  Ver Equipos Asignados
                  <i className="bi bi-arrow-right flecha"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default SeccionCentro01;