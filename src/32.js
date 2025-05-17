// Node.js program to find the maximum and minimum values in an array of numbers

function findMaxAndMin(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }

    let maxValue = arr[0];
    let minValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }

    return { max: maxValue, min: minValue };
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];

try {
    const result = findMaxAndMin(numbers);
    console.log("Maximum value:", result.max);
    console.log("Minimum value:", result.min);
} catch (error) {
    console.error(error.message);
}
