/*
একটা ক োড লি খ ো। যে টা দি য়ে ক োন একটা array এর মধ্যে সবচে য়ে ছ োট
সংখ্যা বে র করে দি তে পারবে ।
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