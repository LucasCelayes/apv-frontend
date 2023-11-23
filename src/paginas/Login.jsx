import { Link,useNavigate } from "react-router-dom"
import useAuth from '../hooks/useAuth'
import { useState } from "react"
import clienteAxios from '../config/axios'
import Alerta from '../components/Alerta'
export const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [alerta, setAlerta] = useState({})
  const navigate = useNavigate()
  const {setAuth} = useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault();

    if([email,password].includes('')) {
      setAlerta({
        msg:'todos los campos son obligatorios',
        error:true
      })
      return

    }
    try {
       const {data} = await clienteAxios.post('/veterinarios/login',{email,password})
       localStorage.setItem('token',data.token)
       setAuth(data)
       navigate('/admin')
      } catch (error) {
      setAlerta({
        msg:error.response.data.msg,
        error:true
      })
    }
  }


  const {msg} = alerta
  return (
    <>
  
    
     <h1 className="text-green-600 font-black text-6xl">
      
        Inicia Sesion y Administra tus
        <span className="text-black"> Pacientes</span>
        <img className="mt-4" src="./src/imagenes/perrro.jpg" width="350"></img>
        
     </h1>
     
     <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl">
      
      {msg && <Alerta
      alerta={alerta}
    />}
        <form onSubmit={handleSubmit}>
            <div className="my-5">
                <label 
                className="uppercase text-gray-600 block text-xl font-bold">

                    Email
                </label>
                <input 
                type="email"
                placeholder="Email de Registro"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="my-5">
                <label 
                className="uppercase text-gray-600 block text-xl font-bold">

                    Password
                </label>
                <input 
                type="password"
                placeholder="*******"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </div>
            <input 
            type="submit"
            value="iniciar sesion"
            className="bg-green-600 w-full py-3 px-10
            rounded-xl text-white uppercase font-bold
            mt=5 hover:cursor-pointer
            hover:bg-green-800 md:w-auto"
            />
            
            
            <nav className="mt-10 lg:flex lg:justify-between">
              <Link className='block text-center my5 text-gray-500' 
              to="/registrar">No tienes una cuenta, Registrate</Link>
            </nav>
            <nav className="mt-10 lg:flex lg:justify-between">
              <Link className='block text-center my5 text-gray-500' 
              to="/olvide-password">Olvide mi password</Link>
            </nav>
            <nav className="mt-10 lg:flex lg:justify-between">
         
            </nav>
        </form>
        

     </div>
     

    
     
    </>
  )
}

export default Login