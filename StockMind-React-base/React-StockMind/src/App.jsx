import {Routes, Route} from 'react-router-dom'
// Importación de pagina de inicio
import Inicio from "./Pages/Inicio"

// importaciones autenticacion
import Login from "./Pages/Auth/Login"
import RoleSelection from "./Pages/Auth/RoleSelection"
import RecordAprendiz from './Pages/Auth/RecordAprendiz'
import RecordInstructor from "./Pages/Auth/RecordInstructor"

// Importación de Páginas de APRENDIZ
import InicioAprendiz from "./Pages/PagesAprendiz/InicioAprendiz"
import MisElementos from "./Pages/PagesAprendiz/MisElementos"
import ReportarDanos from "./Pages/PagesAprendiz/ReportarDanos"
import Reportes from "./Pages/PagesAprendiz/Reportes"
import NotificacionesAprendiz from "./Pages/PagesAprendiz/NotificacionesAprendiz"
import PerfilAprendiz from "./Pages/PagesAprendiz/PerfilAprendiz"
import EditarDatosAprendiz from './Pages/PagesAprendiz/EditarDatosAprendiz'

// Importación de Páginas de ADMIN
import InicioAdmin from './Pages/PagesAdmin/InicioAdmin'
import InventarioAdmin from './Pages/PagesAdmin/InventarioAdmin'
import MovimientosAdmin from './Pages/PagesAdmin/MovimientosAdmin'
import ReportesAdmin from './Pages/PagesAdmin/ReportesAdmin'
import UsuariosAdmin from './Pages/PagesAdmin/UsuariosAdmin'
import SedesAdmin from './Pages/PagesAdmin/SedesAdmin'
import PerfilAdmin from './Pages/PagesAdmin/PerfilAdmin'
import NotificacionesAdmin from './Pages/PagesAdmin/NotificacionesAdmin'
import Centro01 from './Pages/PagesAdmin/Centro01'
import Centro02 from './Pages/PagesAdmin/Centro02'
import Centro03 from './Pages/PagesAdmin/Centro03'


// Importación de Páginas de INSTRUCTOR
import PerfilInstru from './Pages/PagesInstru/PerfilInstru'
import DashboardInstru from './Pages/PagesInstru/DashboardInstru'
import HistorialReportes from './Pages/PagesInstru/HistorialReportes'
import AmbientesInstru from './Pages/PagesInstru/AmbientesInstru'
const App = () => {
  return (
    <div>
      <Routes>
        {/* Ruta de Inicio*/}
        <Route path="/" element={<Inicio />} />

        <Route path="/login" element={<Login />} />
        <Route path="/roles" element={<RoleSelection />} />
        <Route path="/recordaprendiz" element={<RecordAprendiz />} />
        <Route path="/recordinstructor" element={<RecordInstructor />} />

        {/* Rutas de APRENDIZ */}
        <Route path='/inicioaprendiz' element={<InicioAprendiz/>}/>
        <Route path='/reportes' element={<Reportes/>}/>
        <Route path='/miselementos' element={<MisElementos/>}/>
        <Route path='/reportardanos' element={<ReportarDanos/>}/>
        <Route path='/notificacionesaprendiz' element={<NotificacionesAprendiz/>}/>
        <Route path='/perfilaprendiz' element={<PerfilAprendiz/>}/>
        <Route path='/editarperfilaprendiz' element={<EditarDatosAprendiz/>}/>
        
        {/* Rutas de ADMIN */}
        <Route path='/inicioadmin' element={<InicioAdmin/>}/>
        <Route path='/inventarioadmin' element={<InventarioAdmin/>}/>
        <Route path='/movimientosadmin' element={<MovimientosAdmin/>}/>
        <Route path='/reportesadmin' element={<ReportesAdmin/>}/>
        <Route path='/usuariosadmin' element={<UsuariosAdmin/>}/>
        <Route path='/sedesadmin' element={<SedesAdmin/>}/>
        <Route path='/perfiladmin' element={<PerfilAdmin/>}/>
        <Route path='/notificacionesadmin' element={<NotificacionesAdmin/>}/>
        <Route path='/centro01' element={<Centro01/>}/>
        <Route path='/centro02' element={<Centro02/>}/>
        <Route path='/centro03' element={<Centro03/>}/>


        {/* Rutas de INSTRUCTOR */}
        <Route path='/perfilinstructor' element={<PerfilInstru/>}/>
        <Route path='/dashboardinstructor' element={<DashboardInstru/>}/>
        <Route path='/historialreportes' element={<HistorialReportes/>}/>
        <Route path='/ambientesinstructor' element={<AmbientesInstru/>}/>
      </Routes>
    </div>
  );
};

export default App;
