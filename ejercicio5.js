class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    getDetalles(){
        return this
    }
}

class Jugador extends Persona {
    constructor(nombre, apellido, edad, posicion){
        super(nombre,apellido,edad);
        this.posicion = posicion
    }
    getDetalles(){
        return this
    }
}

class Entrenador extends Persona {
    constructor(nombre,apellido,edad, añosExperiencia, idFederacion){
        super(nombre,apellido,edad)
        this.añosExperiencia = añosExperiencia
        this.idFederacion = idFederacion? idFederacion : Math.round(Math.random()*4)+1
    }
    getDetalles(){
        return this
    }
}

class Equipo {
    constructor(director, jugadores) {
        this.director = director
        this.jugadores = jugadores
    }
    getDetalles(){
        return this
    }
}

let gus = new Jugador('gusti', 'paz', '34', 'Defesa')
let agu = new Jugador('agu','paz', '35', 'Medio')
let max = new Jugador('maxi', 'paz', '36', 'Delantero')
let titi = new Jugador('rodrigo', 'paz', '33', 'Portero')
let marga = new Entrenador('Marga','Elsa','63','36')


let flia = new Equipo(marga, [gus,agu,max,titi])

console.log(flia.getDetalles())