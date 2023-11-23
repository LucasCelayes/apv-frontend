 import { useState,useEffect } from "react";
import Alerta from './Alerta'
import usePacientes from "../hooks/usePacientes";
 const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [alerta, setAlerta] = useState('')
   const [id,setId] = useState(null)
    const {guardarPaciente,paciente} = usePacientes()
    useEffect(() => {
    if(paciente?.nombre) {
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
        setId(paciente._id)
    }      
    },[paciente])
    
    
    const handleSubmit = e => {
        e.preventDefault()

        // validar el formulario
        if([nombre,propietario,email,fecha,sintomas].includes('')) {
            setAlerta({
                msg:'todos los campos son obligatorios',
                error:true
            })
            return
        }
        setAlerta({})
        guardarPaciente({nombre,propietario,email,fecha,sintomas,id})
        setAlerta({
            msg: 'guardado Correctamente'
        })
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        setId('')
    }
    const {msg} = alerta
    return (

    <>
    <h2 className="font-black text-3xl text-center mt-5">Administrador de pacientes</h2>
    <p className="text-xl mt-5 mb-10 text-center">
        Añade tus pacientes y   
        <span className="text-green-500 font-bold"> administralos
        </span>
      </p>

    <form className="bg-white py-10 px-5 mb-10 lg:mb-2"
        onSubmit={handleSubmit}
        >
        <div className="mb-5">
            <label>Nombre Mascota</label>
            <input 
            id='nombre'
            type='text'
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label>Nombre Propietario</label>
            <input 
            id='propietario'
            type='text'
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={e => setPropietario(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label>Email</label>
            <input 
            id='email'
            type='email'
            placeholder="Email del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label>Fecha</label>
            <input 
            id='fecha'
            type='date'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
            />
            
        </div>

        <div className="mb-5">
            <label>Sintomas</label>
            <textarea 
            id='sintomas'
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
            />
        </div>

        <input 
        type="submit"
        className="bg-green-500 w-full p-3 text-white
        uppercase font-bold hover:bg-black
        cursor-pointer transition-colors"
        value={ id ? 'Guardar Cambios' : "Agregar Paciente"}
        />
    </form>
    {msg && <Alerta alerta={alerta} />}
    </>
  )
}

export default Formulario;