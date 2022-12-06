// Solution 1 : hard to read idc
const getConsectiveItems = (items, key) => `${items}`.includes(key) ? Math.max(...[...`${items}`].map(x => x != key ? " " : x).join('').split(' ').filter(x => x).map(x => x.length)) : 0

// Test Cases
console.log(getConsectiveItems(90000, 0), 4);
console.log(getConsectiveItems('ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii', 'i'), 11);
console.log(getConsectiveItems("abcdaaadse", "a" ) , 3)
console.log(getConsectiveItems("abcdaaadse", "z" ) , 0)