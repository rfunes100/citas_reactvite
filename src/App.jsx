
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPaciente from "./components/ListadoPaciente"
import { useState , useEffect } from "react"


function App() {
 
  const [pacientes , setpacientes ] = useState( [] )
  const [paciente, setpaciente] = useState({})

  const eliminarpaciente = (id) => {
 
 const pacienteacutliazados = pacientes.filter(paciente => paciente.id !== id  )
 setpacientes(pacienteacutliazados) 

  }

  useEffect(() => {
    const obtnenerlocalstorage = () => {
      const pacientesls = JSON.parse( localStorage.getItem("pacientes") ) ?? []
     setpacientes(pacientesls)
    
    }

    obtnenerlocalstorage()

  }, [])
  

 useEffect(() => {
  localStorage.setItem('pacientes', JSON.stringify(pacientes))
 

 }, [pacientes])
 



  return (
    <div className=" container mx-auto mt-20">
<Header

></Header>
<div className=" mt-12 md:flex">
<Formulario
pacientes={pacientes}
setpacientes={setpacientes}
paciente={paciente}
setpaciente={setpaciente}
></Formulario>
<ListadoPaciente
pacientes={pacientes}
setpaciente={setpaciente}
eliminarpaciente={eliminarpaciente}
></ListadoPaciente>
</div>

    </div>
  )
}

export default App
