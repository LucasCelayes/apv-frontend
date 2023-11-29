import usePacientes from "../hooks/usePacientes"
const Paciente = ({paciente}) => {
    const {setEdicion,eliminarPaciente} = usePacientes()
    const {email,fecha,nombre,propietario,_id,sintomas,raza,anos,telefono,cedula,tipodemascota,peso,vacunas,tratamiento} = paciente
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
        <p className="font-bold uppercase text-green-500">Telefono: {''}
        <span className="font-normal normal-case text-black">{telefono}</span>
        </p>
        <p className="font-bold uppercase text-green-500">Cedula: {''}
        <span className="font-normal normal-case text-black">{cedula}</span>
        </p>
        <p className="font-bold uppercase text-green-500">Fecha de ingreso a Veterinaria: {''}
        <span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span>
        </p>
        <p className="font-bold uppercase text-green-500">Tipo de mascota: {''}
        <span className="font-normal normal-case text-black">{tipodemascota}</span>
        </p>
        <p className="font-bold uppercase text-green-500">Raza: {''}
        <span className="font-normal normal-case text-black">{raza}</span>
        </p>
        <p className="font-bold uppercase text-green-500">Edad: {''}
        <span className="font-normal normal-case text-black">{anos}</span>
        </p>
        <p className="font-bold uppercase text-green-500">Peso: {''}
        <span className="font-normal normal-case text-black">{peso}</span>
        </p>
        <p className="font-bold uppercase text-green-500">Vacunas: {''}
        <span className="font-normal normal-case text-black">{vacunas}</span>
        </p>
        <p className="font-bold uppercase text-green-500">sintomas: {''}
        <span className="font-normal normal-case text-black">{sintomas}</span>
        </p>
        <p className="font-bold uppercase text-green-500">tratamiento: {''}
        <span className="font-normal normal-case text-black">{tratamiento}</span>
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
