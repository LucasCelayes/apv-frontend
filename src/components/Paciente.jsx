import usePacientes from "../hooks/usePacientes"
const Paciente = ({paciente}) => {
    const {setEdicion,eliminarPaciente} = usePacientes()
    const {email,fecha,nombre,propietario,_id,sintomas} = paciente
  console.log(fecha)
  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha)
    return new Intl.DateTimeFormat('es-MX', {dateStyle: 'long'}).format(nuevaFecha)
  }
  console.log(fecha)
    return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold uppercase text-green-500">Nombre: {''}
        <span className="font-normal normal-case text-black">{nombre}</span>
        </p>
        <p className="font-bold uppercase text-green-500">propietario: {''}
        <span className="font-normal normal-case text-black">{propietario}</span>
        </p>
        <p className="font-bold uppercase text-green-500">email: {''}
        <span className="font-normal normal-case text-black">{email}</span>
        </p>
        <p className="font-bold uppercase text-green-500">sintomas: {''}
        <span className="font-normal normal-case text-black">{sintomas}</span>
        </p>
        <p className="font-bold uppercase text-green-500">fecha: {''}
        <span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span>
        </p>
        <p className="font-bold uppercase text-green-500">id: {''}
        <span className="font-normal normal-case text-black">{_id}</span>
        </p>
       <div className="flex justify-between my-5">
        <button
        type="button"
        className="py-2 px-10 bg-black hover:bg-green-500 text-white uppercase
        font-bold rounded-lg"
        onClick={() => setEdicion(paciente)}
        >Editar</button>

       

       
        <button
        type="button"
        className="py-2 px-10 bg-red-600 hover:bg-green-500 text-white uppercase
        font-bold rounded-lg"
        onClick={()=>eliminarPaciente(_id)}
        >Eliminar</button>

       </div>
        </div>

    )
    }
export default Paciente
