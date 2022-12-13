import { Fragment  } from "react"

import Paciente from "./Paciente"


const ListadoPaciente = ( {pacientes, setpaciente, eliminarpaciente }) => {



  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

{
  pacientes && pacientes.length ? (
    <>

  <h2 className=" font-black text-3xl text-center">ListadoPaciente</h2>
      
      <p className=" text-xl mt-5 mb-10 text-center">
        Administra tus {''}
    
        <span className=" text-indigo-600 font-bold">Pacientes y citas</span>
      </p>
    
      {
        pacientes.map( paciente => {
    
          return(
            <Paciente
            paciente= {paciente}
            key={paciente.id}
            setpaciente= {setpaciente}
            eliminarpaciente= {eliminarpaciente}
            />
          )
    
        
        })
      }
      
    
  
    </>
  ): (

    <>
      <h2 className=" font-black text-3xl text-center">No hay pacientes</h2>
      
      <p className=" text-xl mt-5 mb-10 text-center">
        comienza agregando pacientes {''}
    
        <span className=" text-indigo-600 font-bold">y aparecen en este lugar</span>
      </p>
    </>

  )
}
     

    </div>


  )
}

export default ListadoPaciente