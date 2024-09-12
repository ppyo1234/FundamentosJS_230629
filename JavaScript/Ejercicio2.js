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
