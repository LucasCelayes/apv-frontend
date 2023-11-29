 import { useState,useEffect } from "react";
import Alerta from './Alerta'
import usePacientes from "../hooks/usePacientes";
 const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [telefono, setTelefono] = useState('')
    const [ cedula, setCedula] = useState('')
    const [tipodemascota,setTipodemascota] = useState('')
    const [peso,setPeso] = useState('')
    const [vacunas,setVacunas] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [alerta, setAlerta] = useState('')
    const [tratamiento,setTratamiento] = useState('')
    const [raza,setRaza] = useState('')
    const [anos,setAnos] = useState('')
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
        setTelefono(paciente.telefono)
        setCedula(paciente.cedula)
        setTipodemascota(paciente.tipodemascota)
        setPeso(paciente.peso)
        setVacunas(paciente.vacunas)
        setTratamiento(paciente.tratamiento)
        setRaza(paciente.raza)
        setAnos(paciente.anos)
    }      
    },[paciente])
    
    
    const handleSubmit = e => {
        e.preventDefault()

        // validar el formulario
        if([nombre,propietario,raza,anos,email,fecha,sintomas,telefono,cedula,tipodemascota,peso,vacunas,tratamiento].includes('')) {
            setAlerta({
                msg:'todos los campos son obligatorios',
                error:true
            })
            return
        }
        setAlerta({})
        guardarPaciente({nombre,raza,anos,propietario,email,fecha,sintomas,id,telefono,cedula,tipodemascota,peso,vacunas,tratamiento})
        setAlerta({
            msg: 'guardado Correctamente'
        })
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        setId('')
        setTelefono('')
        setCedula('')
        setTipodemascota('')
        setPeso('')
        setVacunas('')
        setTratamiento('')
        setRaza('')
        setAnos('')
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
            <label>Telefono</label>
            <input 
            id='telefono'
            type='text'
            placeholder="Telefono del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
            />
        </div>

        <div className="mb-5">
            <label>Cedula</label>
            <input 
            id='cedula'
            type='text'
            placeholder="Cedula del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={cedula}
            onChange={e => setCedula(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label>Fecha de ingreso a Veterinaria</label>
            <input 
            id='fecha'
            type='date'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
            />
            
        </div>
        <div className="mb-5">
            <label>Tipo de mascota</label>
            <input 
            id='tipodemascota'
            type='text'
            placeholder="Tipo de mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={tipodemascota}
            onChange={e => setTipodemascota(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label>Raza</label>
            <input 
            id='raza'
            type='text'
            placeholder="Raza"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={raza}
            onChange={e => setRaza(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label>Edad</label>
            <input 
            id='anos'
            type='text'
            placeholder="Edad de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={anos}
            onChange={e => setAnos(e.target.value)}
            />
        </div>

        
        <div className="mb-5">
            <label>Peso de la mascota</label>
            <input 
            id='peso'
            type='text'
            placeholder="10 KG"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={peso}
            onChange={e => setPeso(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label>Vacunas</label>
            <input 
            id='vacunas'
            type='text'
            placeholder="Vacunas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={vacunas}
            onChange={e => setVacunas(e.target.value)}
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
        <div className="mb-5">
            <label>Tratamiento</label>
            <textarea 
            id='tratamiento'
            placeholder="Describe el tratamiento"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={tratamiento}
            onChange={e => setTratamiento(e.target.value)}
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