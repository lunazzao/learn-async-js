function sumOfARow(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        if (rowIdx >= 0 && rowIdx < arr.length) {
            const sum = arr[rowIdx].reduce((acc, curr) => acc + curr, 0);
            resolve(sum); 
        } else {
            reject(new Error('Invalid row index')); 
        }
    });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

let rowSumPromises = [];

for (let x = 0; x < array2D.length; x++) {
    rowSumPromises.push(sumOfARow(array2D, x));
}

// Use Promise.any to execute all promises and get the first one that resolves
Promise.any(rowSumPromises)
    .then(firstResolvedSum => {
        console.log('First resolved row sum:', firstResolvedSum);
    })
    .catch(error => {
        console.error('All promises were rejected:', error);
    });
