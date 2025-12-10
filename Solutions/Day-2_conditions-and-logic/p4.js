function isLeapYear(year) {
    if(year % 4 === 0 || year %100 !== 0 && year % 400 === 0) return "Leap Year"
    else return "No Leap year"
}

console.log(isLeapYear(2024));