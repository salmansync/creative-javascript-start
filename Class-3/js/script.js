let candidateGender = 'Male';
let candidateAge = 25;
let candidateSalary = 100000;

console.log('1. Candidate Eligibility Check, Our Feedback →');
if (candidateGender == 'Male') {
  if (candidateAge >= 25) {
    if (candidateSalary >= 100000) {
      console.log('Congrats..! We Found You');
    } else {
      console.log('Salary Min 1 Lakh');
    }
  } else {
    console.log('Age Must Be Min 25...!');
  }
} else {
  console.log('We Need Someone Who is Male....!');
}

console.log('2. Exam Grade Calculator, Your Result →');
let marks = 90;
if (marks > 100 || marks < 0) {
  console.log('Enter Valid Marks...!');
} else if (marks >= 33 && marks < 40) {
  console.log('You Got D...!');
} else if (marks >= 40 && marks < 50) {
  console.log('You Got C...!');
} else if (marks >= 50 && marks < 60) {
  console.log('You Got B...!');
} else if (marks >= 60 && marks < 70) {
  console.log('You Got A-...!');
} else if (marks >= 70 && marks < 80) {
  console.log('You Got A...!');
} else if (marks >= 80 && marks < 100) {
  console.log('You Got A+...!');
} else {
  console.log('You Are Failed...!');
}

console.log('3. Age Group Classifier, Your Age Group →');
let age = 90;
if (age < 0) {
  console.log('Enter Valid Age...!');
} else if (age >= 0 && age < 1) {
  console.log('You are a Baby!');
} else if (age >= 1 && age < 3) {
  console.log('You are a Toddler!');
} else if (age >= 3 && age < 5) {
  console.log('You are a Preschooler!');
} else if (age >= 6 && age < 12) {
  console.log('You are a Child!');
} else if (age >= 12 && age < 18) {
  console.log('You are a Teenager!');
} else if (age >= 18 && age < 25) {
  console.log('You are a Young Adult!');
} else if (age >= 25 && age < 40) {
  console.log('You are a Adult');
} else if (age >= 40 && age < 59) {
  console.log('You are a Middle-aged Adult!');
} else if (age >= 59 && age < 65) {
  console.log('You are a Older Adult!');
} else {
  console.log('You are a Elderly!');
}
//Array
let teamMembers = [10, 20, 30, 40, 50];
console.log(teamMembers);
//Object
let team = {
  name: 'Salman',
  age: 22,
  area: 'Dhaka',
};
console.log(team);
console.log(team.name);
console.log(team.age);
//Destructure
let { name, ageObj, area } = {
  name: 'Salman',
  ageObj: 22,
  area: 'Dhaka',
};
console.log(ageObj);
//Function
function x(name, age) {
  console.log(`My name is ${name} & age is ${age}`);
}
x('Salman', 22);
x('Farsi', 21);
x('Shadman', 24);
//Arrow Function
let z = () => {
  console.log('My name is Salman Farsi');
};
z();

let u = 'Salman';
console.log(u.split(''));
console.log(u.toUpperCase(''));
console.log(u.toLowerCase(''));
