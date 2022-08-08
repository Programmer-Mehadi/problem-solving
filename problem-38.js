/*
leapYear() নামে ফাংশন লি খ ো এবং নে ক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সে টা
চে ক কর ো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন
করবে ।
*/

function leapYear(year) {
    if (year % 4 == 0 || year % 400 == 0)
    {
        return true;
    }
    else {
        return false
    }
}

console.log(leapYear(2023))