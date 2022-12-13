
 const Paciente= ( {paciente, setpaciente, eliminarpaciente } ) => {



   /*
  useEffect(() => {
   console.log("el componenten esta listo")
}, [] )
*/

  const  {nombre, propietario, email, alta,sintomas , id } = paciente

  const handleEliminar = () => {

   const respuesta = confirm('Desea eliminar ese paciente?')

   if(respuesta)
   {
      eliminarpaciente(id)
   }

  
  }

  

   return (
    
  
    
    <div className=" m-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
       <p className=" font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className=" font-normal normal-case">{ nombre } </span>
       </p>

       <p className=" font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}
        <span className=" font-normal normal-case">{propietario } </span>
       </p>

       <p className=" font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className=" font-normal normal-case">{email} </span>
       </p>

       <p className=" font-bold mb-3 text-gray-700 uppercase">
        fecha: {''}
        <span className=" font-normal normal-case">{alta}</span>
       </p>

       <p className=" font-bold mb-3 text-gray-700 uppercase">
        sintomas: {''}
        <span className=" font-normal normal-case">{sintomas} </span>
       </p>

<div className=" flex justify-between">
   <button
   type="button"
   className=" py-2 px-10 bg-indigo-700 text-white
    font-bold uppercase rounded-lg"
    onClick={() => {setpaciente(paciente)}}
   >Editar</button>

<button
   type="button"
   className=" py-2 px-10 bg-red-700 text-white
   font-bold uppercase rounded-lg"
   onClick={ handleEliminar}
   >Eliminar</button>
</div>

    </div>
    
   )
 }
 
 export default Paciente