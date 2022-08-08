/*
You are given an array:
var fruits = ['Apple', 'Banana', 'Orange'];
a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.

*/

var fruits = ['Apple', 'Banana', 'Orange'];
// problem :  a

let bananaIndex = fruits.indexOf('Banana')
fruits[bananaIndex] = 'Mango'
console.log("Array after replace 'Banana' with 'Mango': ", fruits)

// problem : b

fruits.pop()
fruits.push('Watermelon')
console.log("Array after Remove ‘Orange’ and add ‘Watermelon’: ", fruits)