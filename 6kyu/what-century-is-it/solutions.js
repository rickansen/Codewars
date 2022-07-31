// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// 20th century: 1900 - 1999
// 19 - 19.99
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

const whatCentury = (year) => {
  let century = year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;

  return `${century}${createSuffixForCentury(century)}`;
};

const createSuffixForCentury = (century) => {
  if (century === 11 || century === 12 || century === 13) return 'th';

  let lastDigit = century % 10;

  if (lastDigit === 1) return 'st';
  else if (lastDigit === 2) return 'nd';
  else if (lastDigit === 3) return 'rd';
  else return 'th';
};

console.log(whatCentury('1999'), '20th');
console.log(whatCentury('2011'), '21st');
console.log(whatCentury('2154'), '22nd');
console.log(whatCentury('2259'), '23rd');
console.log(whatCentury('1234'), '13th');
console.log(whatCentury('1023'), '11th');
console.log(whatCentury('2000'), '20th');
