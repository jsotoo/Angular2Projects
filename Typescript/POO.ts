function consola (constructor:Function){
  console.log(constructor);
}

@consola
class Avenger{
  nombre:string;
  equipo:string;
  nombreReal:string;
  puedePelear:string;
  peleasGanadas:number;

  constructor(nombre:string, equipo:string, nombreReal:string){
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  }

}

let vengador:Avenger = new Avenger("hulk","cap","bruce");
console.log(vengador);
