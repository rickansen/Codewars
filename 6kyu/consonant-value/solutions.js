function solve(s) {
    let regex = new RegExp(/[^aeiou]/)
    let group = [...s].map(x => regex.test(x) ? x : ' ').join('').split(' ').filter(x => x).map(x => [...x].map(a => a.charCodeAt() - 96 ).reduce((a,b) => a + b) )
    return Math.max(...group)
};
