import { Link } from "react-router-dom"
import { useState } from "react"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

export const Registrar = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta,setAlerta] = useState({})
  const handleSubmit =  async e => {
    e.preventDefault()

    if([nombre, email,password].includes('')) {
      setAlerta({msg:'hay campos vacios',error:true})
      return
    }
    if(password.length < 6) {
      setAlerta({msg:'el password es muy corto, agrega minimo 6',error:true})
      return
    }
    setAlerta({})
    // crear el usuario en la api
    try {
          await clienteAxios.post('/veterinarios',{nombre,email,password})
      setAlerta({
        msg:'creado correctamente,revise su email',
        error:false
      })
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
    <div>
      <h1 className="text-green-600 font-black text-6xl">

        Crea tu cuenta y administra {""}
        <span className="text-black">tus pacientes</span>
      </h1>
      <img className="mt-5" src="./src/imagenes/perrro.jpg" width="350"></img>
    </div>
    <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl">
       {msg && <Alerta
        alerta={alerta}
        />}

        <form 
         onSubmit={handleSubmit}
        >
        <div className="my-5">
                <label 
                className="uppercase text-gray-600 block text-xl font-bold">

                    nombre
                </label>
                <input 
                type="text"
                placeholder="Nombre"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                />
            </div>
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
                placeholder="********"
                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </div>
            <input 
            type="submit"
            value="crear cuenta"
            className="bg-green-600 w-full py-3 px-10
            rounded-xl text-white uppercase font-bold
            mt=5 hover:cursor-pointer
            hover:bg-green-800 md:w-auto"
            />
            </form>
            <nav className="mt-10 lg:flex lg:justify-between">
              <Link className='block text-center my5 text-gray-500' 
              to="/">Ya tienes una cuenta, Inicia sesion</Link>
            </nav>
           
            </div>


    </>
  )
}

export default Registrar