/*
Write a function called make_avg() which will take an array of
integers and the size of that array and return the average of those values.
 */

function make_avg(arr, size) {
    let sum = 0
    for (let i = 0; i < size; i++){
        sum += arr[i]
    }
    let avg = sum / size
    return avg
}
let arr=[2,5,3,4,6,7,8,9,23]
let result = make_avg(arr, arr.length)
console.log(result)