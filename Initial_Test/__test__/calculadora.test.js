const {suma} = require('../initial-test/calculadora')

test("Funciona normal", () => {
    expect(suma('1,2')).toBe(3)
})