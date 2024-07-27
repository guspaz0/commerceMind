function convierteCaracter(cadena){
    let convertido = ''
    let punto = false
    for (let i in cadena) {
        if (cadena[i] == '.') punto = true
        punto? convertido += cadena[i] : convertido += cadena[i].toUpperCase()
    }
    return convertido
}

let texto = "probando ejercicio bonus. de commercemind"

console.log(convierteCaracter(texto))