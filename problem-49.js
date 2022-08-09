/*
Write a function and take an array as a parameter. Find the average of all
the elements of that array and return this average.
*/

function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum+=array[i]
    }
    let avg = sum / array.length
    return avg
}
array = [12,34,25,36,67,8,9,23,34,51,29,72]
let avg = average(array)
console.log(avg)