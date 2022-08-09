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

let numbers = [12, 34, 56, 8, 27, -72, 45, 67, 90]

let smallest = smallestNumber(numbers)
console.log(smallest)


/*
Now for the previous array, try to find the second largest element.
*/

function secondLargest(array) {
    let large = array[0]
    for (let i = 0; i < array.length; i++){
        if (large < array[i]) {
            large =array[i]
        }
    }
    console.log(large)
    let secondLarge = array[0]
    for (let i = 0; i < array.length; i++){
        if (secondLarge < array[i] && array[i] != large) {
            secondLarge=array[i]
        }
    }
    return secondLarge
}

let secondlargeValue = secondLargest(numbers)
console.log(secondlargeValue)