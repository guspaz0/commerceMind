let multiplicador = 6
let multiplos = []
for (let i = 1; i < 100; i++) {
    if (i % multiplicador == 0) multiplos.push(i)
}
console.log(multiplos.join(','))