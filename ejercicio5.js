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

let luc = new Jugador('lucas', 'otamendi', '34', 'Defesa')
let lea = new Jugador('leandro','paredes', '35', 'Medio')
let lio = new Jugador('lionel', 'messi', '36', 'Delantero')
let dibu = new Jugador('Dibu', 'Martinez', '33', 'Portero')
let scaloni = new Entrenador('Lionel','Scaloni','39','10')


let seleccion = new Equipo(scaloni, [luc,lea,lio,dibu])

console.log(seleccion.getDetalles())