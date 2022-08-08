/*

Write a function called make_avg() which will take an three integers and
return the average of those values.

*/

function make_avg(n1,n2,n3 ) {
    let sum = n1 + n2 + n3
    let avg = sum / 3
    return avg
}

let result = make_avg(1, 4, 7)
console.log(result)