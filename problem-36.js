/*
Write a function findLeapYear() that will take the array [2023, 2024, 2025,
2028, 2030] as the input parameter and will check if each year is a leap year. If
a year is a leap year insert that year in a new array, return the new array and
print the result.
 */
function findLeapYear(years) {
    let leapYear=[]
    for (const year of years) {
        if (year % 4 == 0 || year % 400 == 0) {
            leapYear.push(year)
        }
    }
    return leapYear
}

let yearList = [2023, 2024, 2025, 2028, 2030]
console.log(findLeapYear(yearList))