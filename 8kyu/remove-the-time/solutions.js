const shortenToDate = longDate => longDate.slice(0, longDate.indexOf(","))


console.log(shortenToDate("Friday May 2, 9am"), "Friday May 2");
console.log(shortenToDate("Tuesday January 29, 10pm"), "Tuesday January 29");
console.log(shortenToDate("Monday December 25, 10pm"), "Monday December 25");
