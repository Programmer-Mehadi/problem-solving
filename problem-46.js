/*

কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা ত োমাকে বলে দিবে । তুমি একটা ফাংশন দিয়ে বলে
দিবে সে এ+ পাবে নাকি অন্য ক োন গ্রেড পাবে ।
*/

function gradeCalculate(mark) {
    if (mark >= 80) {
        return 'A+'
    }
    else if (mark >= 70) {
        return 'A'
    }
    else if (mark >= 60) {
        return 'B'
    }
    else if (mark >= 50) {
        return 'C'
    }
    else if (mark >= 40) {
        return 'D'
    }
    else {
        return 'Fail'
    }

}

console.log(gradeCalculate(52))
