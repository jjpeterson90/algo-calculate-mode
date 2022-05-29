let cm = require('./calculateMode');

console.log(cm.calculateMode([1,2,3,3]))            // => [3]
console.log(cm.calculateMode([4.5, 0, 0]))         // => [0]
console.log(cm.calculateMode([1.5, -1, 1, 1.5]))    // => [1.5]
console.log(cm.calculateMode([1,1,2,2]))            // => [1,2]
console.log(cm.calculateMode([1,2,3]))              // => [1,2,3], because all occur with equal frequency
console.log(cm.calculateMode(["who", "what", "where", "who"]))  // => ["who"]