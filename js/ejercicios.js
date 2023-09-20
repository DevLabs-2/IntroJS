/*
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
const array1 = [1,2,3,4,5,6,7,8,9,10]
Arrays(array1)
EscaleraA()
EscaleraB()
document.getElementById('7').innerHTML = ("Los nombres con a son " + NombresConA(prompt('Introduci los nombres separados por una coma')));
document.getElementById('8').innerHTML = ("Tu palabra es: " + CadenaSeparada(prompt('Introduci 2 palabras separadas por una coma')));
document.getElementById('9').innerHTML = ("Tu palabra es: " + CadenaConNumeros(prompt('Introduci una palabra, y luego de la coma un numero')));
document.getElementById('10').innerHTML = ("Tu lista es: " + StrConSeparador    (prompt('Introduci una lista de palabras separadas por coma')));
*/
let pedido = prompt('Ingresa tu pedido (nombre:total, )')
CalculadoraDeRecaudacion(pedido)
//1
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
//2
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
//3
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
//4
function YoObjeto(obj){
    for(const propiedad in obj){
        console.log(`${propiedad}: ${obj[propiedad]}`)
    }
}
//5
function Arrays(array1){
    const array2 = [];
    for(let i = 0; i < array1.length; i++){
        array2[i] = array1[i] * 2;
        console.log(array2[i]);
    }
}
//6A
function EscaleraA(){
    let sts = '';
    for(let i = 0; i<5; i++){
        sts += '*'
        console.log(sts)
    }
}
//6B
function EscaleraB(){
    let sts = '*';
    let fondo = '----'
    for(let i = 0; i<5; i++){
        console.log(`${fondo}${sts}${fondo}`)
        fondo = fondo.slice(1)
        sts +='**'
    }
}
//7
function NombresConA(str){
    let array = str.split(',')
    console.log(array)
    const arrayNombres = [];
    array.forEach(element => {
        if(element[0] == 'A' || element[0] == 'a'){
            arrayNombres.push(element)
        }
    });
    return arrayNombres
}
//8
function CadenaSeparada(str){
    let cadena = str.split(',')
    console.log(cadena)
    const palabra2 = cadena[1];
    return palabra2
}
//9
function CadenaConNumeros(str){
    let cadena = str.split(',')
    return cadena[0].slice(0,cadena[1])
}
//10
function StrConSeparador(str){
    let array = str.split(',')
    str = ""
    str += array[0];
    array.forEach(element =>{
        if(element != array[0]){str += " - " + element;}
    });
    return str;
}
//11
function CalculadoraDeRecaudacion(str){
    let array = str.split(',')
    total = 0
    for(i = 0; i < array.length; i++){
        total += parseInt(array[i].slice(array[i].indexOf(":")+1))
    }
    console.log(total)
    
}