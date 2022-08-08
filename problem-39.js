/*
ত োমার বয়স কি odd নাকি even সংখ্যা সে টা চে ক কর একটা ফাংশন দি য়ে । সে ই
ফাংশনকে ক োন সংখ্যা প্যারামি টার হি সে বে দি লে , সে ই সংখ্যা Even হলে ফাংশন true রি টার্ন
করবে আর Odd হলে false রি টার্ন করবে ।
 */

function ageEvenOdd(age) {
    if (age % 2 == 0) {
        return true
    }
    else {
        return false
    }
}

console.log(ageEvenOdd(26))
