/*ত োমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সে গুলাকে
console log করে দে খাতে সে টা কি তুমি পারবে ? তাহলে তুমি সে ই ক োড করে ফে ল ো */

array = [2, 34, 89, 678, 56, 34, 456, 6, 7, 8, 906]

for (const element of array) {
    if (element > 80) {
        console.log(element)
    }
}