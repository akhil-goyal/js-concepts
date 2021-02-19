// CLOSURES

// - A closure is a combination of a function bundled together with references to 
//   its surrounding state.
// - A closure gives access to an outer function's scope from an inner function.
// - In JS, closure is created everytime a function is created at function creation time.

// EXAMPLE - 

// let data = [
//   {
//     name: 'Akhil',
//     birthYear: 1996
//   },
//   {
//     name: 'Sahil',
//     birthYear: 1990
//   },
//   {
//     name: 'Daljeet',
//     birthYear: 2000
//   }
// ]

// function retirement(retirementAge) {
//   let currentYear = 2021;
//   let text = `years of service is remaining`;
//   return function (employeeName, birthYear) {
//     let currentAge = currentYear - birthYear;
//     let serviceRemaining = retirementAge - currentAge;
//     return `${serviceRemaining} ${text} for ${employeeName}`;
//   }
// }

// let retirementIndia = retirement(60);
// let retirementGermany = retirement(65);
// let retirementUS = retirement(66);

// for (let i = 0; i < data.length; i++) {
//   console.log(retirementUS(data[i].name, data[i].birthYear));
// }

// function userData() {
//   let harmeetRetirement = retirementGermany('Harmeet', 2001);
//   console.log(harmeetRetirement);
// }

// userData();




// DATA HIDING IN CLOSURES

// EXAMPLE - 

// function fortifySecret() {

//   let topSecret = 'gw8g&(G97fg7wdg&T%#%cjs';

//   return function handleSecret() {
//     return topSecret;
//   }

// }

// let secretCode = fortifySecret();
// console.log(secretCode());