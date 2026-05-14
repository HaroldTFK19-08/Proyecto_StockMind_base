import '../../StylesComponents/StylesAdmin/InventarioAdmin.css'

const SeccionInventarioAdmin = () => {
  return (
<main className="main_admin">
    <section className="titulo_categorias_admin">
        <div>
            <h2>Categorias</h2>
        </div>
        <div className="botones_categorias_admin">
            <div>
                <button className="boton1_admin"><i className="bi bi-plus-lg"></i> Agregar Categoria</button>
            </div>
            <div>
                <button className="boton1_admin"><i className="bi bi-grid"></i> Todas las categorias</button>
            </div>
        </div>
    </section>

    <section className="categorias_admin">
        <div className="categoria_admin">
            <i className="bi bi-laptop"></i>
            <h4>Tecnología</h4>
            <span>242 items</span>
        </div>
        <div className="categoria_admin">
            <i className="bi bi-book"></i>
            <h4>Bibliográfico</h4>
            <span>856 items</span>
        </div>
        <div className="categoria_admin">
            <i className="bi bi-eyedropper"></i>
            <h4>Laboratorio</h4>
            <span>124 items</span>
        </div>
        <div className="categoria_admin">
            <i className="bi bi-tools"></i>
            <h4>Herramientas</h4>
            <span>312 items</span>
        </div>
        <div className="categoria_admin">
            <i className="bi bi-building"></i>
            <h4>Oficina</h4>
            <span>45 items</span>
        </div>
    </section>

    <section className="titulo_elementos_admin">
        <div className="titulo_admin">
            <h2>Elementos</h2>
            <p>Gestiona y administra los elementos del inventario</p>
        </div>
        <div className="botones_elementos_admin">
            <button className="btn-pri_admin">
                <i className="bi bi-funnel"></i>
                Filtrar
            </button>
            <button className="btn-pri_admin">
                <i className="bi bi-download"></i>
                Exportar
            </button>
            <button className="btn-pri_admin">
                <i className="bi bi-plus-lg"></i>
                Agregar elemento
            </button>
        </div>
    </section>

    <div className="contenedor-elementos_admin">
        {/* Card 1 */}
        <div className="card-elemento_admin">
            <span className="estado disponible_admin">Disponible</span>
            <img src="https://frontier.com.co/content/product/0013352_portatil-dell-latitude-3410-core-i3-10110u210ghz-16gb-ddr4-2666mhz-ssd-256gb-m2-pcie-nvme-14-w10-pro.jpeg" alt="Elemento"/>
            <div className="contenido_admin">
                <h4>Portátil Dell Latitude</h4>
                <div className="botones_admin">
                    <button className="btn-sec_admin" translate="no">Ver</button>
                    <button className="btn-pri_admin" translate="no">Editar</button>
                </div>
            </div>
        </div>

        {/* Card 2 */}
        <div className="card-elemento_admin">
            <span className="estado disponible_admin">Disponible</span>
            <img src="https://intekgroup.com.co/wp-content/uploads/2020/12/microscopio-vertical-ne900-01-1024x647.jpg" alt="Elemento"/>
            <div className="contenido_admin">
                <h4>Microscopio Óptico</h4>
                <div className="botones_admin">
                    <button className="btn-sec_admin" translate="no">Ver</button>
                    <button className="btn-pri_admin" translate="no">Editar</button>
                </div>
            </div>
        </div>

        {/* Card 3 */}
        <div className="card-elemento_admin">
            <span className="estado uso_admin">En uso</span>
            <img src="https://www.alkomprar.com/medias/7700149200516-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzMTg5MnxpbWFnZS93ZWJwfGFHVXlMMmcxTlM4eE5ETTFOVGN6TWpFek5UazJOaTgzTnpBd01UUTVNakF3TlRFMlh6QXdNVjgzTlRCWGVEYzFNRWd8M2IxYjIyNWM5MjMzZWNhMGJiNzNmN2Q2YzZkZTQ1Y2QyZGJhMWMyYmNkMTQyZjQ3N2FlN2M4OWMwNDQwMGU3ZA" alt="Elemento"/>
            <div className="contenido_admin">
                <h4>Silla Oficina</h4>
                <div className="botones_admin">
                    <button className="btn-sec_admin" translate="no">Ver</button>
                    <button className="btn-pri_admin" translate="no">Editar</button>
                </div>
            </div>
        </div>

        {/* Card 4 */}
        <div className="card-elemento_admin">
            <span className="estado uso_admin">En uso</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Crj4DsByl-_-Jkqdjm5zNG0QW3vzbhvD1A&s" alt="Elemento"/>
            <div className="contenido_admin">
                <h4>MackBook NEO</h4>
                <div className="botones_admin">
                    <button className="btn-sec_admin" translate="no">Ver</button>
                    <button className="btn-pri_admin" translate="no">Editar</button>
                </div>
            </div>
        </div>

        {/* Card 5 */}
        <div className="card-elemento_admin">
            <span className="estado uso_admin">En uso</span>
            <img src="https://i.blogs.es/ec3cc1/lglf560/450_1000.jpg" alt="Elemento"/>
            <div className="contenido_admin">
                <h4>Televisor LG</h4>
                <div className="botones_admin">
                    <button className="btn-sec_admin" translate="no">Ver</button>
                    <button className="btn-pri_admin" translate="no">Editar</button>
                </div>
            </div>
        </div>

        {/* Card 6 */}
        <div className="card-elemento_admin">
            <span className="estado uso_admin">En uso</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBciH9_EEdLyBD348j988djcIDDki2nwMCMA&s" alt="Elemento"/>
            <div className="contenido_admin">
                <h4>Mouse</h4>
                <div className="botones_admin">
                    <button className="btn-sec_admin" translate="no">Ver</button>
                    <button className="btn-pri_admin" translate="no">Editar</button>
                </div>
            </div>
        </div>

        {/* Card 7 */}
        <div className="card-elemento_admin">
            <span className="estado disponible_admin">Disponible</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQav97v23NBOVd-R_hJucMf46BDu5_613u_5w&s" alt="Elemento"/>
            <div className="contenido_admin">
                <h4>Mesa Oficina</h4>
                <div className="botones_admin">
                    <button className="btn-sec_admin" translate="no">Ver</button>
                    <button className="btn-pri_admin" translate="no">Editar</button>
                </div>
            </div>
        </div>

        {/* Card 8 */}
        <div className="card-elemento_admin">
            <span className="estado disponible_admin">Disponible</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNXFX6gZEoUS2yKLcYJXzrSDhDaAZzes2nA&s" alt="Elemento"/>
            <div className="contenido_admin">
                <h4>Impresora</h4>
                <div className="botones_admin">
                    <button className="btn-sec_admin" translate="no">Ver</button>
                    <button className="btn-pri_admin" translate="no">Editar</button>
                </div>
            </div>
        </div>
    </div>
</main>
  )
}

export default SeccionInventarioAdmin
