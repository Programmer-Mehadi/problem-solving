/*
প্রতি দিন ত োমার কাজ কি ?
১) রাত ৮ টা বাজে মডি উল আনলক কর ো
২) ফটাফট ভি ডি ও দে খে দে খে প্রাকটিস কর ো
৩) ভি ডি ও দে খতে দে খতে ন োটস নাও
৪) মডি উল শে ষ হলে পুরা মডি উল নি জে নি জে প্রাকটিস কর ো
৫) ক োন কি ছুবঝু তে না পারলে (চি ন্তা করে দে খ ো এইখানে কি ন্তু একটা শর্ত আছে ), সাপ োর্ট সে শনে
জয়ে ন কর ো
এখন ত োমার কাজ হচ্ছে একটা for লপু ১০ বার চালি য়ে উপরে র জি নি সগুলা আউটপুট হি সে বে
দে খান ো।
---- using while loop
*/

let dailyTasks = ['unlock module', 'see video and practice', 'see video and take notes', 'when modules finish,then practice', 'not understand']
let j = 10;
while (j >0) {
    let i = 0;
while ( i < dailyTasks.length){
    if (dailyTasks[i] == 'not understand') {
        console.log('join support session')
        i++
        continue
    }
    console.log(dailyTasks[i])
    i++
    }
    console.log()
    j--
}