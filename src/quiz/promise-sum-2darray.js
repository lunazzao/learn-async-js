function sumOfARow(arr, rowIdx) {
    // We return a new Promise
    return new Promise((resolve, reject) => {
        // Check if the row index is within the bounds of the array
        if(rowIdx >= 0 && rowIdx < arr.length) {
            // Sum the numbers in the row
            const sum = arr[rowIdx].reduce((acc, curr) => acc + curr, 0);
            resolve(sum); // Resolve the promise with the sum
        } else {
            reject(new Error('Invalid row index')); // Reject the promise if the row index is invalid
        }
    });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let rowSumPromises = [];

for(let x = 0; x < array2D.length; x++) {
    // Use sumOfARow to create a promise for the sum of each row
    rowSumPromises.push(sumOfARow(array2D, x));
}

// Use Promise.all to execute all promises
Promise.all(rowSumPromises)
    .then(rowSums => {
        // Here rowSums is an array of the resolved values from each promise in rowSumPromises
        const totalSum = rowSums.reduce((acc, curr) => acc + curr, 0);
        console.log('Sum of each row:', rowSums);
        console.log('Total sum:', totalSum);
    })
    .catch(error => {
        // If any promise is rejected, catch the error here
        console.error(error);
    });
