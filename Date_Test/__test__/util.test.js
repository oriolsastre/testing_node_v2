const {
 orderdates, substring, formatDate1, formatDate2, formattedDateRu, daysBetween, workdaysBetween
} = require('../date_test/util');
const russianLocale = require('date-fns/locale/ru');
const testTipus = ['a' , 1, {clau: "valor"}, true, null, undefined]

describe("Testejar la primera funció d'ordenar una array amb dates", () => {
    test("Ordena correctament", () => {
        const datesProva = [new Date('2022-12-20'), new Date('2022-12-21'), new Date('2022-12-19')]
        const datesOrdenades = [new Date('2022-12-19'), new Date('2022-12-20'), new Date('2022-12-21')];
        expect(orderdates(datesProva)).toStrictEqual(datesOrdenades)
    })
    test("No li dono cap array", () => {
        testTipus.forEach(element => {
            expect(() => {orderdates(element)}).toThrow(Error)
        })
    })
})

describe("Testejar la funció substring", () => {
    test("Substring actua correctament amb strings", () => {
        expect(substring("Oriol",0,3)).toBe("Ori");
        expect(substring("Test",1,3)).toBe("es");
    })
    test("Substring amb nombres", () => {
        expect(() => {
            substring(53,1,2)
        }).toThrow(Error)
    })
})

const avui = new Date()
const dema = new Date('2022-12-21')
describe("Testejar les funcions de formatejar dates", () => {
    test("Testejar amb la data d'avui. Caldria actualitzar al dia d'avui", () => {
        expect(formatDate1(avui)).toBe('12/20/2022');
        expect(formatDate2(avui)).toBe('20-12-2022');
        expect(formattedDateRu(avui)).toBe('декабря 20, 2022');
    })
    test("Dono la data com un string", () => {
        expect(()=> {formatDate1('2022-12-20')}).toThrow(Error)
        expect(()=> {formatDate2('2022-12-20')}).toThrow(Error)
        expect(()=> {formattedDateRu('2022-12-20')}).toThrow(Error)
    })
  /*   test("No dono una data sinó altres tipus", () => {
        testTipus.forEach(element => {
            expect(() => {formatDate1(element)}).toThrow(Error)
        })
    }) */
})

describe("Testejar les funcions de diferència de dates", () => {
    test("Diferència de dates correcte", () => {
        //diference in days mira també l'hora, per tant, cal que siguin dies sensers. 1 dia i 12 hores, retorna 1
        expect(daysBetween(avui,dema)).toBe(0);
        //Difference in BusinessDays, deu ser similar a differenceinCalendarDays, que no té en compte l'hora, sinó absolutament la diferencia de dies.
        expect(workdaysBetween(avui,dema)).toBe(1)
    })
})
