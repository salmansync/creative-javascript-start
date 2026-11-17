// 1.Number
let age = 22;
console.log('Data Type:', typeof age, 'Value:', age);
// 2.String
let name = 'Salman';
console.log('Data Type:', typeof name, 'Value:', name);
// 3.Boolean
let isActive = true;
console.log('Data Type:', typeof isActive, 'Value:', isActive);
// 4.Undefined
let something;
console.log('Data Type:', typeof something, 'Value:', something);
// 5.Null
let value = null;
console.log('Data Type:', typeof value, 'Value:', value);
// 6.BigInt
let n = 354543245434555425500n;
console.log('Data Type:', typeof n, 'Value:', n);
// 7.Symbol
let noor = Symbol(1);
let salman = Symbol(1);
console.log('Data Type:', typeof noor, 'Value:', noor == salman);
// Operator
let numberOne = Number(prompt('Enter 1st Number:'));
let numberTwo = Number(prompt('Enter 2nd Number:'));
let add = numberOne + numberTwo;
let sub = numberOne - numberTwo;
let mul = numberOne * numberTwo;
let div = numberOne / numberTwo;
console.log('Addition:', add);
console.log('Substract:', sub);
console.log('Multiplication:', mul);
console.log('Division:', div);
//Assignment Operator =,+=,-=,*=
let num = 5;
console.log('Assignment Operatort num+=5', (num += 5));
console.log('Assignment Operatort num-=5', (num -= 5));
console.log('Assignment Operatort num*=5', (num *= 5));
// == & == Operator
let a = 10;
let b = '10';
console.log("a=10,b='10', ==", a == b);
console.log("a=10,b='10', ===", a === b);
// Condition
if (age > 18) {
  console.log('You Can Vote');
} else {
  console.log("You Can't Vote");
}
