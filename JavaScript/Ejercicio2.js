// Tipos de datos en js 

//1. Undefined 

console.warn("Tipo Undefined");
let cliente;
console.log (`El cliente es : ${cliente}`);
console.log (`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);


cliente = "ppyo";

console.log (`El cliente es : ${cliente}`);
console.log (`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = 1234;

console.log (`El cliente es : ${cliente}`);
console.log (`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);


// Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas 

// 2. Boolean 

console.warn("Tipo de Dato: Boolean (true/false)");


let esPremium = "No lo se ";

console.log (`¿Es el cliente premium ?: ${esPremium}`);
console.log (`El tipo de dato de la variable cliente es: ${typeof(esPremium)}`);


esPremium =  true;

console.log (`¿Es el cliente premium ?: ${esPremium}`);


esPremium =  true;
console.log (`El tipo de dato de la variable cliente es: ${typeof(esPremium)}`);


if(esPremium){
    console.log ("El cliente pagó por su sevició");
}else{
    console.log ("El cliente no pagó por su sevició");

}


console.log("Cambiando el valor de esPremiun a false ");
esPremium = false


if(esPremium){
    console.log ("El cliente pagó por su sevició");
}else{
    console.log ("El cliente no pagó por su sevició");

}



// 3. Number 
var cantidad ;
const costo_producto = 10.50;
let saldo_cuenta = 2500;
let monto_transacción ;

console.warn ("---- Tipo de Dato - Number (Números,positivos , negativos , decimales , flotantes )");
console.log (`Tu saldo es al dia de hoy es de ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)})`);

console.log (`El producto que has seleccionado cuesta : ${costo_producto}`);

cantidad = 8;
console.log (`Has elegido comprar: ${cantidad} de producto`);
console.log (`El importe total de la compra es : ${cantidad*costo_producto} `);
console.log (`tu nuevo saldo es de : ${saldo_cuenta}`);

//El cliente realiza un bono de 1500
monto_transacción = 15000;
console.log(`Tu abono es de ${monto_transacción} ha sido recibido , tu nuevo saldo es de ${saldo_cuenta+monto_transacción} `) 


//String (cadena de caracteres)
const alumno = "Jose Arturo Garcia Gonzalez"
let producto = "Monitor 20\""
console.warn("---Tipo de Dato - STRING (Cadena de caracteres)---")
console.log (`El nombre del alumno es ${alumno}, que es un tipo de dato ${typeof(alumno)}`);
producto="Monitor 20\""
console.log (`El nombre del producto es ${producto}, que es un tipo de dato ${typeof(producto)}`);

//Manipulando los Strings 

console.log (`Mas adelante podremos transforammarnos el contenido de los strings usando funciones especificas como convertir a mayusculas: ${alumno}=>${alumno.toUpperCase()}`)
console.log (`Mas adelante podremos transforammarnos el contenido de los strings usando funciones especificas como convertir a minusculas: ${alumno}=>${alumno.toLowerCase()}`)

//BIGINIT (Enteros de dimensiones amplias ) - Generalmente utilizando en sistemas matematicos , fisicos o espaciales donde se requiere de una excelente precisión númerica
console.warn ("Tipo de datos mayores ")

const numeroGrande=123456789
const numeroGrande2=123456789123456789
const numeroGrande3=123456789123456789123456789123456789

console.log(`El primer experimento de un numero grande es ${numeroGrande} ,que si es soportado por number , y su tipo de dato es : ${typeof(numeroGrande)}`)
console.log(`El primer experimento de un numero grande es ${numeroGrande2} ,que si es soportado por number , y su tipo de dato es : ${typeof(numeroGrande2)}`)
console.log(`El primer experimento de un numero grande es ${numeroGrande3} ,que si es soportado por number , y su tipo de dato es : ${typeof(numeroGrande3)}`)

/// String o cADENAS DE TEXTO 

// const alumno = "Juan"
// let producto = "monitor 20 pulgadas "

// const numero = "30"
// const numero2 = 30

// console.log (typeof numero)
// console.log (typeof numero2)

//BigInit
// const numeroGrande = BigInt(5165416419561971649645165646565)
// console.log(typeof numeroGrande)

// const numero = 10
// const numero2 = 20

// console.log(numero + Number(numeroGrande))



// const numero = "30"
// const numero2 = 20
// console.log(typeof String(numero2))
// console.log(typeof Number(numero))  


//Symbol
// const primerSymbol = Symbol(30)
// const segundoSymbol = Symbol(30)
// console.log(primerSymbol === segundoSymbol)
// console.log(primerSymbol.valueOf())
// console.log(segundoSymbol.valueOf())

// //Null 
// const descuento = null 
// console.log (typeof descuento)