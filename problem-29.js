/*
Write a function called odd_even() which takes an integer value and tells
whether this value is even or odd. You need to do it in 4 ways:

● Has return + Has parameter
● No return + Has parameter
 */

// has parameter  + no return 
function odd_even(num) {
    if (num % 2 == 0) {
        console.log("Even")
    }
    else {
        console.log("Odd")
    }
}
odd_even(4)

// no parameter + no return
 /*function odd_even() {
    let num = 5
    if (num % 2 == 0) {
        console.log("Even")
    }
    else {
        console.log("Odd")
    }
}
odd_even()
*/

// no parameter +  return
/* function odd_even() {
    let num = 5
    if (num % 2 == 0) {
        return "Even"
    }
    else {
        return "Odd"
    }
}
console.log(odd_even()) */


//  parameter +  return 
/*
function odd_even(num) {
  
    if (num % 2 == 0) {
        return "Even"
    }
    else {
        return "Odd"
    }
}
console.log(odd_even(6))

*/