let i = 0
while (i < 5) {
    let numeroGenerado = Math.round(Math.random()*100)
    let result;
    if (numeroGenerado % 2 == 1) result=`el numero es impar`
    else result='el numero es par'
    console.log(result)
    i++
}


