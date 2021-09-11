document.write("<h1>Hello world estudiante karolcastillo </h1>");

//TIPOS DE DATOS
console.log('this is a string / esto es una cadena')
console.log(14.3)
console.log(true)
console.log([1, 2, 3, 4])
console.log({"username":"ryan", "score": 70.4 })

//VARIABLES
var nameuser ="john" //nombre
let lastname= "carter" //apellido
console.log(nameuser)
console.log(lastname)

nameuser='pepe'; //cambiamos el valor de la variable nameuser
console.log(nameuser) //mostramos el nuevo valor de la variable 

//CONS, es una constante y no se pude cambiar
const PI=3.1415;
console.log(PI)

const ID='user1';
console.log(ID)

//camelcase 
let nombreDePersona='Kaorl';

//OPERADORES
let numberOne=10;
let numberTwo=100;

let result = numberOne + numberTwo;

console.log(result);

let completeName= nameuser+' '+ lastname;
console.log(completeName);

let comparacion= numberOne == numberTwo; 
console.log(comparacion);

let passwordDB= 'pepe123'
let input='pepe123'

let resultado = input==passwordDB;

//CONDICIONALES
if (resultado == true){
    console.log("login correcto");
}else{
    console.log("contraseña incorrecta");
}

let score=70;

if (score > 30){
    console.log("necesitas practicar mas");
}
else if(score > 15) {
console.log("estas mejorando");
}
else{
    console.log("necesitas ver este tutorial");
}

let typeCart='Credit Card';

switch(typeCart){
    case'Debid Card':
    console.log("esto es una tarjeta de debito");
    break;

    case 'Credit Card':
        console.log("esto es una tarjeta de credito");
    break;
    default:
        console.log("no tienes tarjeta");

}
//BUCLE

let count= 10;
while(count > 0 ){
    console.log(count);
    count= count -1;
}

count=1;
while(count <= 10 ){
    console.log(count);
     count ++;
}

let names= ["ryan", "joe", "john"];

console.log(names.length);

for(let i=0; i< names.length; i++){
console.log(names[i]);
}

for(let i=names.length -1; i>=0;  i--){
    console.log(names[i]);
    }

    //FUNCIONES

    function greeting(){
        console.log("HELLO");

    }

    greeting(); 
    

    function greting(personName){
        console.log(personName)
        console.log("HELLO " + personName);

    }
    greting(" kara");
    greting(" maria");
    greting(" luna");

    function add(n1, n2){
        console.log(n1 + n2)
        

    }
    add(3, 2);
    add(100, 300);