// Composibility : It is a system design principle that deals with 
// relationship between components that can selected & assembled
// in various combinations. Functions are executed from left to right.
// If the functions are executed from right to left, then its called piping.

// let multipleBy3 = num => num*3;

// let makePositive = num => Math.abs(num);

// let compose = (f1, f2) => (data) => f1(f2(data));

// let multiplyBy3AndAbsolute = compose(multipleBy3, makePositive);

// let result = multiplyBy3AndAbsolute(-50);

// console.log(result);



// AMAZON EXAMPLE -

// const user = {
//     name: 'Kim',
//     active: true,
//     cart: [],
//     purchases: []
// }

// const compose = (f, g) => (...args) => f(g(...args));

// purchaseItem(
//     emptyCart,
//     buyItem,
//     applyTaxToItem,
//     addItemToCart
// )(user, { name: 'Laptop', price: 200 });

// function purchaseItem(...fns) {
//     return fns.reduce(compose);
// }

// function addItemToCart(user, item) {
//     const updateCart = user.cart.concat(item);
//     return Object.assign({}, user, { cart: updateCart })
// }

// function applyTaxToItem(user) {
//     const { cart } = user;
//     const taxRate = 1.3;
//     const updatedCart = cart.map(item => {
//         return {
//             name: item.name,
//             price: item.price * taxRate
//         }
//     })
//     return Object.assign({}, user, { cart: updatedCart })
// }

// function buyItem(user) {
//     return Object.assign({}, user, { purchases: user.cart })
// }

// function emptyCart(user) {
//     return Object.assign({}, user, { cart: [] })
// }