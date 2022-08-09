/*
Try to find the second largest element in a array.
*/

let numbers = [12, 34, 56, 8, 27, -72, 45, 67, 90]

function secondLargest(array) {
    let large = array[0]
    for (let i = 0; i < array.length; i++){
        if (large < array[i]) {
            large =array[i]
        }
    }
 
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