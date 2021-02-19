// PROTOTYPAL INHERITANCE

// let dragon = {
//     name: 'Smaug',
//     breathesFire: true,
//     damagePerSecond() {
//         return 95;
//     },
//     punchLine() {
//         if (this.breathesFire) {
//             return `I am ${this.name}. I'll roast your a$$ up.`
//         }
//     }
// }

// let snake = {
//     name: 'Nagini'
// }

// console.log(dragon.isPrototypeOf(snake));
// snake.__proto__ = dragon;
// console.log(snake.punchLine());

// for(let prop in snake){
//     if(snake.hasOwnProperty(prop)){
//         console.log('liz', prop);
//     }
//     console.log(prop);
// }