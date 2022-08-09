/*
একটা ক োড লিখ ো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছ োট সংখ্যা বের করে দিবে ।
*/
function smallestNumber(n1, n2, n3) {
    if (n1 < n2 && n1 < n3) {
        console.log(n1)
    }
   else if (n2 < n1 && n2 < n3) {
        console.log(n2)
    }
    else {
        console.log(n3)
    }
}
smallestNumber(23,34,56)