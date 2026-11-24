// For-loop
let x = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < x.length; i++) {
//   console.log(x[i]);
// }

// Map
x.map((item) => {
  console.log(item);
});

// KFC Order Array
let orders = [
  { dish: 'Potato Wedges', price: 189, spicy: false, qty: 2 },
  { dish: 'Rizo Rice', price: 129, spicy: false, qty: 2 },
  { dish: 'Chicken & Fries Meal', price: 359, spicy: true, qty: 1 },
  { dish: 'Chicken & Wings Combo', price: 599, spicy: true, qty: 1 },
];

console.table(orders);
//ForEach
console.log('Order List Using ForEach');
const MyforEach = orders.forEach((orders, index) => {
  console.log(
    `No. ${index + 1}: ${orders.qty} X ${orders.dish} = ${orders.price * orders.qty} BDT`,
  );
});
// Map
console.log('Order List Using Map');
const myMap = orders.map((orders, index) => {
  console.log(
    `No. ${index + 1}: ${orders.qty} X ${orders.dish} = ${orders.price * orders.qty} BDT`,
  );
});
//Filter
const myFilter = orders.filter((orders) => orders.spicy);
console.table(myFilter);

//DOM Manipulation
console.log('Query Selector By Tag Name ▼ ');
let h1 = document.querySelector('h1');
console.log(h1.innerText);
console.log('Query Selector By Class Name ▼ ');
let heading = document.querySelector('.heading');
console.log(heading.innerHTML);
console.log('Get Elements By Class Name ▼ ');
let headingClass = document.getElementsByClassName('heading');
console.log(headingClass);
console.log('Get Elements By Tag Name ▼ ');
let nothing = document.getElementById('nothing');
console.log(nothing.innerHTML);
// Dark Mode Btn
let darkBtn = document.getElementById('darkBtn');
darkBtn.addEventListener('click', () => {
  document.body.style.background = 'black';
  document.body.style.color = 'white';
});
// Light Mode Btn
let lightBtn = document.getElementById('lightBtn');
lightBtn.addEventListener('click', () => {
  document.body.style.background = 'white';
  document.body.style.color = 'black';
});
// Dark Mode Toggle
function darkMode() {
  let dark = document.body;
  dark.classList.toggle('darkMode');
}
let nameInput = document.getElementById('nameInput');
let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  console.log(nameInput.value);
});
//Keyup
// nameInput.addEventListener('keyup', () => {
//   console.log(nameInput.value);
// });
// Clicked Value

//Multiplication Table
let multiNumber = document.getElementById('multiNumber');
let startBtn = document.getElementById('startBtn');

console.log('Multi Table In Terminal ▼');
startBtn.addEventListener('click', () => {
  XPathResult.innerHTML = '';

  for (let i = 1; i <= 10; i++) {
    console.log(`${multiNumber.value} X ${i} = ${multiNumber.value * i}`);
    result.innerHTML += `${multiNumber.value} X ${i} = ${multiNumber.value * i} <br>`;
  }
});

//Result Checker
let marksInput = document.getElementById('marksInput');
let checkBtn = document.getElementById('checkBtn');
let yourResult = document.getElementById('yourResult');

checkBtn.addEventListener('click', () => {
  let marks = Number(marksInput.value);

  if (marksInput.value === '') {
    yourResult.innerHTML = 'Please Enter Your Marks...!';
  } else if (marks > 100 || marks < 0) {
    yourResult.innerHTML = 'Enter Valid Marks...!';
  } else if (marks >= 33 && marks < 40) {
    yourResult.innerHTML = 'You Got D...!';
  } else if (marks >= 40 && marks < 50) {
    yourResult.innerHTML = 'You Got C...!';
  } else if (marks >= 50 && marks < 60) {
    yourResult.innerHTML = 'You Got B...!';
  } else if (marks >= 60 && marks < 70) {
    yourResult.innerHTML = 'You Got A-...!';
  } else if (marks >= 70 && marks < 80) {
    yourResult.innerHTML = 'You Got A...!';
  } else if (marks >= 80 && marks <= 100) {
    yourResult.innerHTML = 'You Got A+...!';
  } else {
    yourResult.innerHTML = 'You Are Failed...!';
  }
});
