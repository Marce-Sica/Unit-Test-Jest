// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let oneDollarIs = {
    "JPY": 135.84, 
}

let oneYenIs = {
    "GBP": 0.006,
}

const fromDollarToYen = (dollar) => {
    let resultado = dollar * oneDollarIs["JPY"]
    return resultado
}

const fromEuroToDollar = (euro) => {
    let resultado = euro * oneEuroIs["USD"]
    return resultado
}

const fromYenToPound = (yen) => {
    let resultado = yen * oneYenIs["GBP"]
    return resultado
}

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};