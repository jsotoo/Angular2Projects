var nombre = "Jonathan";
var apellido = "Soto";
var edad = "20";
//Template literales ES6
var texto = "Hola " + nombre + " " + apellido + " " + (edad);
//Funciones Flecha
var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
console.log(miFuncion("normal"));
console.log(miFuncionF("Flecha"));
//Destructuracion de objetos
var persona = {
    nom: "Sergio",
    apel: "Morales",
    carrera: "Ing Sistemas"
};
var nom = persona.nom, apel = persona.apel, carrera = persona.carrera;
console.log(nom, apel, carrera);
//promesas ES6
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa Terminada");
        //bien
        //resolve();
        //mal
        reject();
    }, 1500);
});
prom1.then(function () {
    console.log("Bien");
}, function () {
    console.error("Mal");
});
function enviarMision(hulk) {
    console.log("Enviando a: " + hulk.nombre);
}
var hulk = {
    nombre: "bruce",
    poder: "fuerza"
};
enviarMision(hulk);
