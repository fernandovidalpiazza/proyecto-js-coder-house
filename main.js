
const pocimasInfo =  [
  {
      id: "1",
      descripcion: "esta pocima le brindara felicidad por siempre por un año",
      cantidad: 5,
      efectosColaterales: "esta posimas puede hacer que se ria todo el tiempo"
  },
  {
      id: "2",
      descripcion: "Ud. eligió la pócima dinero por siempre por un año",
      cantidad: 5,
      efectosColaterales: "esta posimas puede hacer que se ria todo el tiempo"
  },

  {
    id: "3",
    descripcion: "Ud. eligió la pócima joven por siempre por un año",
    cantidad: 5,
    efectosColaterales: "esta posimas puede hacer que se ria todo el tiempo"
},

{
  id: "4",
  descripcion: "Ud. eligió la pócima de belleza por siempre por un año",
  cantidad: 5,
  efectosColaterales: "esta posimas puede hacer que se ria todo el tiempo"
},

{
  id: "5",
  descripcion: "Ud. eligio la pócima buena suerte por un año",
  cantidad: 5,
  efectosColaterales: "esta posimas puede hacer que se ria todo el tiempo"
},

{
  id: "6",
  descripcion: "Ud. eligio la pócima buena suerte por un año",
  cantidad: 5,
  efectosColaterales: "esta posimas puede hacer que se ria todo el tiempo"
}


]
 //funcion agrega pocimas
const agregarPocimas = ()=> {
  const continuar = true
  let  id
  let cantidad
  let descripcion
  let eColaterales
  alert ("ud. selecciono agregar pocimas")
  while (continuar){
    do{
    id = prompt ("ingrese id")
    }while(isNaN(id))
    do{
    cantidad = parseInt (prompt ("ingrese cantidad"))
    }while(isNaN(cantidad))
    descripcion = prompt ("ingrese descripcion de la pocima")
    eColaterales = prompt ("ingrese los efectos colaterales")
    pocimasInfo.push({
    id:id,
    cantidadad:cantidad,
    descripcion:descripcion,
    ecolaterales:eColaterales
  })


  alert ("su pocima fue agregada con exito verifique la consola")
  console.log (pocimasInfo)
  continuar = confirm ("quiere segurir agregando pocimas?" )
}
}

const resultadoDonacion = (cantidad, donacion, ID) => {
  let resultado  =  cantidad * donacion 
  alert  ("gracias por donar $ "  + resultado + " Ud. va a recibir la pocima N°" + ID )
}



const continuaCompra = () =>{
let cantidad
let donacion
let id
  do{
    cantidad = parseInt(prompt ("Ingrese la cantidad de pócimas de la felicidad deseadas"))
      }while(isNaN(cantidad))

  do{
    donacion = parseInt(prompt ("Ingrese el monto de la donacion "))
     }while(isNaN(donacion))

  do{
    id = prompt ("Ingrese el id de la pocima deseada")
     }while (isNaN(id) || id < 1 || id > 6)
  return {

    cantidad,
    donacion,
    id
  }  
}



const comprar = () =>{
  let continuar = true
  while (continuar){
    let datos = continuaCompra()

     switch (datos.id) {
 
    case "1":
      alert ("Ud. eligió la pócima de la felicidad ")
      break

    case "2":
       alert ("Ud. eligió la pócima dinero por siempre")
       break

    case "3":
       alert ("Ud. eligió la pócima joven por siempre")
       break

    case "4":
        alert ("Ud. eligió la pócima de belleza por siempre")
        break

    case "5":
        alert ("Ud. eligio la pócima buena suerte")
         break

    case "6":
        alert ("Ud. eligio la pócima buena suerte")
        break

    default:
      alert ("Ingrese una opcion valida del 1 al 6 o cancele para salir")
      break
   
}
resultadoDonacion (datos.cantidad, datos.donacion, datos.id)
continuar=confirm("Presione aceptar para continuar comprando o cancelar para finalizar ")
}
}
// info pocimas 
const infoPosima = () =>{
  continuar = true
  let id
  alert ( "ud. a eligido buscar info, por favor ingrese el id de su pocima favorita" )
  while (continuar) {
    
  
  do{
    id = parseInt(prompt  ("ingrese el id de su pocima favorita"))
  } while (isNaN(id) || id < 1 || id > 6)
           
  const pocimaBuscada = pocimasInfo.find ((pocimasInfo) => pocimasInfo.id == id)

  alert ("su informacion se encuentra en la consola ")
  console.log (pocimaBuscada)
  continuar = confirm ("quiere buscando info de su pocima?" )
}

}
//borrar pocima


const boPocimas = () => {
  continuar = true
  while (continuar) {
      const id = prompt("Ingrese el ID de la pocima a borrar")
      const index = pocimasInfo.findIndex(pocima => pocima.id == id);
      if (index !== -1) {
   pocimasInfo.splice(index, 1);
  }
  alert ("su confiramcion se encuentra en la consola")
  console.log(pocimasInfo);
  continuar = confirm ("quiere seguir borrando pocimas?" )
}
}

//ver pocimas

const verPocimas = () => {
  pocimasInfo.forEach((pocima) => {
    alert("Pocima id: " + pocima.id +  "\n  descripcion: " + pocima.descripcion + " \n cantidad: " + pocima.cantidad)
  })
}




function inicializar() {
  continuar = true
  while (continuar) {
  const promptValue = prompt(" ingrese:  \n1 si quiere realizar compras. \n 2 si desea tener mas informacion . \n 3 Argragar pocimas.   \n 4 borrar pocima. \n 5 ver pocimas")
  switch (promptValue) {
    case "1":
      comprar()
      return
    case "2":
      infoPosima()
      return
    case "3":
      agregarPocimas()
      return
      
    case "4":
      boPocimas()
        return
    case "5":
      verPocimas()
      return
     
    default:
      alert ("ud no ingresado opcion valida")
      return
  }
  
}   
}


inicializar()   
     





 














