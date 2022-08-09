/*
Suppose, you have an array with 8 elements. Find the smallest element of
that array.
*/

function smallestNumber(array) {
    let smallValue = array[0]
    for (let i = 0; i < array.length; i++) {
        if (smallValue > array[i]) {
            smallValue = array[i]
        }
    }
    return smallValue
}

let numbers = [12, 34, 56, 78, 27, -72, 45, 67, 90]

let smallest = smallestNumber(numbers)
console.log(smallest)