/*
ক োন একটা সংখ্যা প্রাইম সংখ্যা (prime number কিনা। সেটা চেক করার একটা ফাংশন লিখ ো।
*/

function findPrime(number) {
    if (number == 1) {
        console.log("This isn't a prime number.")
    }
    else if (number == 2) {
        console.log("This is a prime number.")
    }
    else {
        for (let i = 2; i <= number / 2; i++){
            if (number % i == 0) {
                console.log("This is a prime number")
                return
            }
        }
        console.log("This isn't a prime number.")
    }
}
findPrime(32)