import { useState, useEffect} from "react"
import Error from './Error'
import Paciente from "./Paciente";


const Formulario = ( {pacientes, setpacientes, paciente, setpaciente }) => {


    
   const [nombre, setnombre] = useState('');
   const [propietario, setpropietario] = useState('');
   const [email, setemail] = useState('');
   const [alta, setalta] = useState('');
   const [sintomas, setsintomas] = useState('');
   const [error, seterror] = useState(false);

useEffect(() => {
  

  return () => {
    if( Object.keys( paciente).length > 0  )
    {
      console.log("si hay algo")
      setnombre(paciente.nombre)
      setpropietario(paciente.propietario)
      setemail(paciente.email)
      setalta(paciente.alta)
      setsintomas(paciente.sintomas)
    }
    else{
      console.log("no hay nada")
    }
  }
}, [ paciente])
 



   const handleSubmit = (e) => {
      e.preventDefault() 

      const generarid = () => {
         const random = Math.random().toString(36).substr(2)
         const fecha = Date.now().toString(36)

         return random + fecha
      }

      if([nombre,propietario,email,alta,sintomas].includes('') )
      {
         console.log('hay uno vacio')
         seterror(true)
         return

      }
      seterror(false)

      const objetopaciente = {
         nombre,
         propietario,
         email,
         alta,
         sintomas,
       //  id: generarid()
      }

      if( paciente.id )
      {

         objetopaciente.id = paciente.id
         const pacientesactualizado = pacientes.map(pacientestate => 
            paciente.id == pacientestate.id ?  objetopaciente : pacientestate)
         
            setpacientes(pacientesactualizado)
         setpaciente({})
      }
      else{
         objetopaciente.id =  generarid()
         setpacientes([...pacientes, objetopaciente ])
     
      }

   
setnombre('')
setpropietario('')
setemail('')
setalta('')
setsintomas('')


   }


   

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className=' font-black text-3xl text-center'>
      Seguimiento paciente
      
      </h2>
      <p className=' text-lg mt-5 text-center mb-10'>
         Agregar Pacientes y {''}
         <span className=' text-indigo-600 font-bold '> Administrarlos</span>
      </p>

      <form
       onSubmit={handleSubmit}
      className=' bg-white shadow-md roudex-lg py-10 px-5 mb-10'
      >
         { error && 
         <Error >
todos los campos obligatorios
         </Error>
                 
           }
          <div className=' mb-5'>
             <label htmlFor='mascota'
              className=' block text-gray-700 uppercase font-bold'>Nombre Mascota </label>
             <input type="text"
             id='mascota'
              placeholder='Nombre mascota'
              className=' border-2 w-full p-2 mt-2 placeholder-gray-400
                         rounded-md'
                value={nombre}
                onChange={ (e)=> {setnombre(e.target.value) }}
             ></input>

          </div>

          <div className=' mb-5'>
             <label htmlFor='propietario'
              className=' block text-gray-700 uppercase font-bold'>Nombre Propietario </label>
             <input type="text"
             id='propietario'
              placeholder='Nombre Propietario'
              className=' border-2 w-full p-2 mt-2 placeholder-gray-400
                         rounded-md'
                         value={propietario}
                         onChange={ (e)=> {setpropietario(e.target.value) }}
             ></input>

          </div>

          <div className=' mb-5'>
             <label htmlFor='email'
              className=' block text-gray-700 uppercase font-bold'>email contacto propietario</label>
             <input type="email"
             id='email'
              placeholder='email'
              className=' border-2 w-full p-2 mt-2 placeholder-gray-400
                         rounded-md'
                         value={email}
                         onChange={ (e)=> {setemail(e.target.value) }}
             ></input>

          </div>


          <div className=' mb-5'>
             <label htmlFor='alta'
              className=' block text-gray-700 uppercase font-bold'>alta</label>
             <input type="date"
             id='alta'
             value={alta}
             onChange={ (e)=> {setalta(e.target.value) }}
              className=' border-2 w-full p-2 mt-2 placeholder-gray-400
                         rounded-md'

             ></input>

          </div>

          <div className=' mb-5'>
             <label htmlFor='sintomas'
              className=' block text-gray-700 uppercase font-bold'>Sintomas</label>
           <textarea id='sintomas'
           placeholder='esctibe los sintomas'
           className=' border-2 w-full p-2 mt-2 placeholder-gray-400
           rounded-md'
           value={sintomas}
           onChange={ (e)=> {setsintomas(e.target.value) }}
           >

           </textarea>

          </div>

          <button type=' submit'
          className=' bg-indigo-600 w-full p-3 uppercase text-white
           font-bold text-center hover:bg-indigo-700 cursor-pointer
            transtition-all'
         
          >
          {paciente.id? 'Editar Paciente': "Agregar paciente" }
          </button>


      </form>
      </div>
  )
}

export default Formulario