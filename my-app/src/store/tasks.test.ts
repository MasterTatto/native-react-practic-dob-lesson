import {calculate} from "./tasks";

// test('check test sum', () => {
//     //1. Test data
//     const a: number = 23
//     const b: number = 20
//     //2. work function code
//     const result = sum(a, b)
//     //3.check
//     expect(result).toBe(43)
//     expect(sum(-4, -5)).toBe(-9)
// })

test('check calculate', () => {
    const a = 6
    const b = 3

    expect(calculate(a, b, {type: 'MULT'})).toBe(18)
    expect(calculate(a, b, {type: 'PLUS'})).toBe(9)
    expect(calculate(a, b, {type: 'DIV'})).toBe(2)
})