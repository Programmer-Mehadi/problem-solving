/*

You and your friends Tom, Jane, Peter and John got their final exam
results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
95, Peter’s total score is 56 and John’s total score is 40. The grading
chart is

80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friends’ grades using
if-else.

*/

let myScore = 85;
let tomScore = 66;
let janeScore = 95;
let peterScore = 56;
let johnScore = 40;
// here works only my score result
if (myScore >= 80) {
    console.log('A')
}
else if (myScore >= 60) {
    console.log('B')
}
else if (myScore >= 50) {
    console.log('C')
}
else if (myScore >= 40) {
    console.log('D')
}
else {
    console.log('F')
}