/*
একইভাবে উল্টা হি সাব করবে । যাতে ত োমাকে ফারে নহাইট হি সে বে তাপমাত্রা দি লে সে টাকে
সে লসি য়াস এ কনভার্ট করে আউটপুট দি বে ।
*/

function ferenToCel(feren) {
    let cel = (feren-32)/1.8
    return cel
}
console.log(ferenToCel(93.2))