// Memoization 

// It is used to reduce the time for repetitive operations.
// Also referred to as caching. 


// EXAMPLE -

function memo() {

    let cache = {};

    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('Function Run!');
            cache[n] = n + 80;
            return cache[n];
        }
    }

}

let memoized = memo();

console.log(memoized(5));
console.log(memoized(5));