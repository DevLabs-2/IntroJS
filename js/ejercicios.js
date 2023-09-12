let nombre = prompt('Ingresa tu nombre')
CalcularEdad(prompt('Ingresa tu fecha de nacimiento (MM/DD/AAAA)'))
let frutaBuscada = prompt('Ingresa el nombre de la fruta')
const frutas = ['banana','manzana roja','pera','anana','manzana verde','sandia','frutilla','melon','mandarina','naranja']
frutaBuscada.toLowerCase()
BuscarFruta(frutaBuscada, frutas)
EsIgual()
const ciudad = {
    nombre: 'Arles',
    fechaFundacion: '9/11/2000',
    población: 2977,
    extensión: '1234ha'
}
YoObjeto(ciudad)

function CalcularEdad(fecha)
{
    const fecha1 = new Date(fecha)
    const fechaHoy = new Date()
    let edad = fechaHoy.getFullYear() - fecha1.getFullYear()
   if((fechaHoy.getMonth() - fecha1.getMonth() < 0)){
    edad--;
   }
   else if((fechaHoy.getMonth() == fecha1.getMonth() && fechaHoy.getDay() - fecha1.getDay() < 0)){  
    edad--;
   }
   console.log(`Hola ${nombre}, tenes ${edad} años!`)
}
function BuscarFruta(fruta, frutas)
{
    const busqueda =  frutas.find((frutas) => frutas == frutaBuscada)
    if(busqueda)
    {
        console.log('Sí, tenemos ' + frutaBuscada)
    }
    else
    {
        console.log('No, no tenemos ' + frutaBuscada)   
    }
}
function EsIgual(){
    if(10 == '10'){
        console.log('10 es == a diez')
    }
    if(10 === '10'){
        console.log('10 es === a diez')
    }
    console.log(typeof 10.6)
    if(true == 1){
        console.log('es cierto')
    }
    else{
        console.log('no es cierto')
    }
}
function YoObjeto(obj){
    for(const propiedad in obj){
        console.log(`${propiedad}: ${obj[propiedad]}`)
    }
}