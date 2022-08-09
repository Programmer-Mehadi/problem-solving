/*
একটা ফাংশন লিখ ো। সেই ফাংশনে র মধ্যে ইনপুট হিসেবে একটা array নিবে । সেই array এর মধ্যে অনে কগুলা সংখ্যা থাকবে । ত োমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে । সেই সংখ্যা গুলার গড় বে র করবে । তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে । একটু চিন্তা কর ো। বঝু ার চেষটা কর ো। ট্রাই কর ো। দেখ ো পার ো কিনা।
*/

function avgCalculate(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i]
        
    }
    let avg = sum / array.length
    return avg
}

array = [23,45,6,78,26,51,29,81]
let average = avgCalculate(array)
console.log(average)