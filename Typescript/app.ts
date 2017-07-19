
let nombre:string = "Jonathan";
let apellido:string = "Soto";
let edad:string = "20";
//Template literales ES6
let texto: string =`Hola ${nombre} ${apellido} ${(edad)}`;


//Funciones Flecha

let miFuncion = function(a:string){
  return a;
}

let miFuncionF = (a:string) => a;

console.log(miFuncion("normal"));
console.log(miFuncionF("Flecha"));

//Destructuracion de objetos

let persona = {
  nom: "Sergio",
  apel:"Morales",
  carrera: "Ing Sistemas"
}

let {nom,apel, carrera} = persona;

console.log(nom,apel,carrera);

//promesas ES6

let prom1 = new Promise((resolve:any,reject:any)=>{

setTimeout(()=>{
  console.log("Promesa Terminada");
//bien
  //resolve();
//mal
  reject();
},1500)
})

prom1.then(()=>{
  console.log("Bien");
}, ()=>{
    console.error("Mal");
})

//interfaces

interface hulk{
  nombre:string,
  poder:string
}

function enviarMision(hulk:hulk){
  console.log("Enviando a: " + hulk.nombre);
}

let hulk: hulk ={
  nombre: "bruce",
  poder: "fuerza"
}

enviarMision(hulk);
