import '../../StylesComponents/StylesAdmin/Centro02.css'

const SeccionCentro02 = () => {
  // Array de datos para los ambientes
  const ambientes = [
    {
      id: 1,
      nombre: "Ambiente 101",
      categoria: "SOFTWARE",
      estado: "ACTIVO",
      capacidad: 30,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZxMxyxMnx8W5DA8Y0_svarvPAOBdobOqnw&s",
      equipos: [
        { tipo: "Equipos de cómputo", cantidad: 15, icono: "bi-laptop" },
        { tipo: "Periféricos", cantidad: 20, icono: "bi-mouse2" }
      ]
    },
    {
      id: 2,
      nombre: "Ambiente 202",
      categoria: "REDES",
      estado: "ACTIVO",
      capacidad: 25,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZxMxyxMnx8W5DA8Y0_svarvPAOBdobOqnw&s",
      equipos: [
        { tipo: "Routers", cantidad: 10, icono: "bi-router" },
        { tipo: "Racks", cantidad: 5, icono: "bi-hdd-stack" }
      ]
    }
  ];

  return (
    <main className="contenedor-principal centro02">
      <section className="parte-inicial centro02">
        <div className="texto-encabezado centro02">
          <h1 className="titulo-seccion centro02">Centro de Teleinformatica</h1>
          <p className="descripcion-seccion centro02">Ambientes pertenecientes a este centro de formación</p>
        </div>
        <div className="acciones-encabezado centro02">
          <button className="boton-filtro centro02">
            <i className="bi bi-filter-left icono-boton"></i> Filtrar
          </button>
          <button className="boton-agregar centro02">
            <i className="bi bi-plus-lg"></i> Agregar Ambiente
          </button>
        </div>
      </section>

      <section className="seccion-contenido centro02">
        <div className="contenedor-tarjetas centro02">
          
          {/* Mapeo del Array de Ambientes */}
          {ambientes.map((ambiente) => (
            <div className="tarjeta-ambiente centro02" key={ambiente.id}>
              <div className="tarjeta-superior centro02">
                <img 
                  src={ambiente.imagen} 
                  alt={ambiente.nombre} 
                  className="imagen-ambiente centro02"
                />
                <span className={`etiqueta-estado ${ambiente.estado.toLowerCase()} centro02`}>
                  ● {ambiente.estado}
                </span>
              </div>
              
              <div className="tarjeta-info centro02">
                <div className="encabezado-info centro02">
                  <div className="identificacion-ambiente centro02">
                    <h3 className="nombre-ambiente centro02">{ambiente.nombre}</h3>
                    <p className="categoria-ambiente centro02">{ambiente.categoria}</p>
                  </div>
                  <div className="indicador-capacidad centro02">
                    <span className="numero-capacidad centro02">{ambiente.capacidad}</span>
                    <span className="texto-capacidad centro02">TOTAL</span>
                  </div>
                </div>

                <div className="detalles-equipos centro02">
                  {/* Mapeo de los equipos dentro de cada ambiente */}
                  {ambiente.equipos.map((equipo, index) => (
                    <div className="fila-equipo centro02" key={index}>
                      <div className="nombre-tipo-equipo centro02">
                        <i className={`bi ${equipo.icono} icono-detalle`}></i>
                        <span>{equipo.tipo}</span>
                      </div>
                      <span className="conteo-equipo centro02">{equipo.cantidad}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tarjeta-footer centro02">
                <button className="boton-ver-mas centro02">
                  Ver Equipos Asignados
                  <i className="bi bi-arrow-right icono-flecha"></i>
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  )
}

export default SeccionCentro02