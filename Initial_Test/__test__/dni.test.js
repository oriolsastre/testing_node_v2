const {lletraDNI} = require('../initial-test/dni')

test("DNIs correcte", () => {
    expect(lletraDNI(53298933)).toBe('K')
    expect(lletraDNI('70810346')).toBe('Q')
    expect(lletraDNI('49277367')).toBe('M')
})
test("0 inicials han de retornar la lletra correcte, i són necessaris", () => {
    expect(lletraDNI('04338003')).toBe('L')
    expect(() => {
        lletraDNI(4338003)
    }).toThrow(Error)
})
test("DNI amb mida incorrecte", () => {
    expect(() => {
        lletraDNI()
    }).toThrow(Error)
    expect(() => {
        lletraDNI(5)
    }).toThrow(Error)
    expect(() => {
        lletraDNI(5329893)
    }).toThrow(Error)
    
})
test("DNI que no siguin numeros hauria de ser error", () => {
    expect(() => {
        lletraDNI('53298933K')
    }).toThrow(Error)
    expect(() => {
        lletraDNI('1234567e')
    }).toThrow(Error)
    expect(() => {
        lletraDNI('z')
    }).toThrow(Error)
})