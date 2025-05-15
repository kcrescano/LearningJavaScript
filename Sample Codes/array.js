const myNumbers = [1, 4, 7, 10, 15];

// (value, start index, end index + 1)
console.log(myNumbers.fill(0, 1, 3)); // [1, 0, 0, 10, 15]
console.log(myNumbers.fill(13)); // [13, 13, 13, 13, 13]
console.log(myNumbers.fill(5, 2)); // [13, 13, 5, 5, 5]

Array.from('Hello'); // ['H', 'e', 'l', 'l', 'o']
Array.from([3, 5, 7], x => x * x); // [9, 25, 49]

Array.of(15); // [15]
Array.of(101, 202, 303); // [101, 202, 303]
Array.of(undefined); // [undefined]
