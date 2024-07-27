
let letra = 'o'
let cadena = 'hola como estas'

let repeticiones = 0
for (let i in cadena) {
    if (letra == cadena[i]) repeticiones++
}
console.log(`el carácter "${letra}" se repite ${repeticiones} veces en "${cadena}"`)