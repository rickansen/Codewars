const countDevelopers = list => list.filter(x => x.continent === 'Europe' && x.language === 'JavaScript').length

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

console.log(
    countDevelopers(list1), 1, "Noah is the only JavaScript developer from Europe");

const list2 = [
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
    { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
];

console.log(
    countDevelopers(list2), 0, "Lukas is not a JS devolper");
