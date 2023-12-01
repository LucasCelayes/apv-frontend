import { Link } from "react-router-dom" 
import useAuth from "../hooks/useAuth"
const Header = () => {

    const {cerrarSesion} = useAuth()
  return (
    <header className="py-10 bg-green-500">
        <div className="container mx-auto flex justify-between items-center ">
       
            <h1 className="font-bold text-2xl text-black">Administrador de Pacientes de 
            {''}
            <span className="text-white font-black"> Veterinaria</span>
            </h1>
            <nav className="flex gap-2">
                <Link to="/admin" className="text-white text-sm uppercase no-underline font-bold">Pacientes</Link>
                <Link to="/admin/perfil" className="text-white text-sm uppercase font-bold no-underline">Configuracion</Link>
             
             <button 
             type="button"
             className=" text-sm uppercase font-bold text-black"
             onClick={cerrarSesion}
             >
                
                Cerrar Sesion
             </button>
            </nav>
        </div>
    </header>
  )
}

export default Header