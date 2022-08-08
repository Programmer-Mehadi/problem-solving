/*
একটা ফাংশন লি খবা যে টা ১৩ এর নামতা (multiplication table) আউটপুট হি সে বে
দেখাবে ।
 */

function namta(num) {
    for (let i = 1; i <= 10; i++){
        console.log(num+" * "+i+" = ",i*num)
    }
}
namta(13)