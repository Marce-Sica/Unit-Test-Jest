// importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One dollar should be 135.84 yenes", function(){ 
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(475.44); //1 dollar son 135.84 yenes, entonces 3.5 dolares deberian ser = (3.5 * 135.84)
})

test("One euro should be 1.206 dollars", function(){ 
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One yen should be 0.0062 pounds", function(){ 
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.021); //1 yen son 0.006 pounds, entonces 3.5 yenes deberian ser = (3.5 * 0.006)
})