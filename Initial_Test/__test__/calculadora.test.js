const {suma} = require('../initial-test/calculadora')

test("Funciona normal", () => {
    expect(suma('')).toBe(0)
    expect(suma('1')).toBe(1)
    expect(suma('5,12')).toBe(17)
    expect(suma('1,2')).toBe(3)
    expect(suma('1 2')).toBe(3)
    expect(suma('1,2 3')).toBe(6)
    expect(suma('12 5')).toBe(17)
    expect(suma('5,12')).toBe(17)
    expect(suma('12n5')).toBe(17)
    expect(suma('5,12n5')).toBe(22)
    expect(suma('5,1200n5')).toBe(10)
    expect(() => {
        suma('1 2 -5')
    }).toThrow(Error)
})
test("Delimitador propi", () => {
    // expect(suma('// \n12')).toBe(12)
    // expect(suma('// \n1 2')).toBe(3)
    expect(suma('//,\n1,2')).toBe(3)
    expect(suma('//:\n12:5:5')).toBe(22)
})