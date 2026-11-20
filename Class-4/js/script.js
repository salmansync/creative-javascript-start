//Multiplication table with input number
const num = Number(prompt('Enter a number:'));
for (let i = 1; i <= 10; i++) console.log(`${num} x ${i} = ${num * i}`);

//Array manipulation methods
const numbers = [100, 200, 300, 400, 500];
console.log('Main Array:', numbers);

numbers.push(600);
console.log('Push:', numbers);

numbers.pop();
console.log('Pop:', numbers);

numbers.shift();
console.log('Shift:', numbers);

numbers.unshift(50);
console.log('Unshift:', numbers);

//for-loop (1 to 9)
for (let i = 1; i < 10; i++) console.log(i);
