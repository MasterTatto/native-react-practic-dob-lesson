// export function sum(a: number, b: number): number {
//     return a + b
// }
//
// export function mult(a: number, b: number): number {
//     return a * b
// }
//
// export function div(a: number, b: number): number {
//     return a / b
// }
//
// export function sub(a: number, b: number): number {
//     return a - b
// }

export type ActionType = {
    type: "PLUS" | 'MULT' | 'DIV' | 'SUB'
}

export function calculate(a: number, b: number,action:ActionType) {
    switch (action.type) {
        case "PLUS" :
            return a + b
        case "MULT":
            return a * b
        case "DIV":
            return a / b
        case "SUB":
            return a - b
        default:
            throw new Error('Error')
    }
}

