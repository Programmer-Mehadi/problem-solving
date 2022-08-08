/*
একটা ফাংশন লি খবে । এই ফাংশনে র নাম হবে bestFriend তারপর সে ই ফাংশনে
ইনপুট প্যারামি টার হি সে বে একটা array নি বে । সে ই array এর মধ্যে ত োমার সব
ফ্রে ন্ডে র নাম থাকবে । এখন ত োমার কাজ হচ্ছে যে ফ্রে ন্ড এর নাম সবচে য়ে বড় সে ই ফ্রে ন্ড এর
নাম রি টার্ন করে দে য়া। এই ক্ষে ত্রে তুমি নামটা অর্থাৎ ফ্রে ন্ডে র নাম (স্ট্রি ং) রি টার্ন করতে হবে ।

*/

function bestFriend(friends) {
    let friend=friends[0]
    for (let i = 0; i < friends.length; i++){
        if (friends[i].length > friend.length) {
            friend=friends[i]
        }
    }
    return friend
}

let friendList = ['Sakib','Riad','Sourov','Tutul','Sadia','Sifat','Abid','Ashraful']
console.log(bestFriend(friendList))