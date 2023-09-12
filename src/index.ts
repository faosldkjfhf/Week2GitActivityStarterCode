import { Calculator } from "./calculator";

const calc = new Calculator();

const result_add = calc.add(2, 3);
const result_subtract = calc.subtract(5, 3);
const result_multiply = calc.multiply(5, 3);
const result_divide = calc.divide(10, 2);

console.log(`result_add = ${result_add}`);
console.log(`result_subtract = ${result_subtract}`);
console.log(`result_multiply = ${result_multiply}`);
console.log(`result_divide = ${result_divide}`);
calc.hello();
console.log('done.')
