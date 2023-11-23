import { Link } from "react-router-dom"
import { useState } from "react"
import Alerta from '../components/Alerta'
import clienteAxios from '../config/axios'

export const OlvidePassword = () => {
  const [email, setEmail] = useState('')
  const [alerta,setAlerta] = useState({})
  const handleSubmit = async e => {
    e.preventDefault()
    if(email ==='' || email.length < 6) {
      setAlerta({msg: 'El email es obligatorio',error:true})
      return
    }
    try {
      const {data} = await clienteAxios.post('/veterinarios/olvide-password',{email})
      console.log(data)
      setAlerta({msg:data.msg})
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

        Recupera tu acceso y no pierdas a  {""}
        <span className="text-black">tus pacientes</span>
      </h1>
      <img className="mt-5" src="./src/imagenes/perrro.jpg" width="350"></img>
      
    </div>
    <div className="mt-20 md:mt-5 shadow-lg px-5 py-20 rounded-xl bg-white">

      {msg && <Alerta
    alerta={alerta}
    />}
        <form
        onSubmit={handleSubmit}
        >
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
                onChange={e =>setEmail(e.target.value)}
                />
            </div>
            <input 
            type="submit"
            value="enviar instrucciones"
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
            <nav className="mt-10 lg:flex lg:justify-between">
              <Link className='block text-center my5 text-gray-500' 
              to="/registrar">No tienes una cuenta registrate</Link>
            </nav>
            </div>
            <div>
     
      </div>
    </>
  )
}

export default OlvidePassword