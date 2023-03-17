function solution(date){
    let str = [date.getMonth()+1, date.getDate(), date.getFullYear()].join('')
    let res = 0
    
    for (let i = 0; i < str.length; i++) {
        res += +str[i]  
        if (res >=10) res = [...String(res)].reduce((a,b) => +a + +b, 0)
    }

    return res
}

console.log(solution(new Date('10/13/1964')), 7, '10/13/1964');
console.log(solution(new Date('01/02/2008')), 4, '01/02/2008');
console.log(solution(new Date('06/14/2010')), 5, '06/14/2010');
console.log(solution(new Date('02/04/2010')), 9, '02/04/2010');