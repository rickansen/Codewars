function countFeelings(string, array) {
    let ans = array.map( x => {
        let temp = string
        let arr = [...x]
        let count = 0
        for (let i = 0; i < x.length; i++) {
            if (temp.includes(arr[i])) {
                temp = temp.replace(arr[i], '')
                count++
            }

            if (count === arr.length) return true
         
        }
    }).filter(x => x).length

    return `${ans} ${ans === 1 ? 'feeling' : "feelings"}.`
} 


console.log(
    countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief']), '3 feelings.');
console.log(
    countFeelings('angerw', ['anger', 'awe', 'joy', 'love', 'grief']), '2 feelings.');
console.log(
    countFeelings('griefgriefgrief', ['anger', 'awe', 'joy', 'love', 'grief']), '1 feeling.');
console.log(
    countFeelings('abcdkasdfvkadf', ['desire', 'joy', 'shame', 'longing', 'fear']), '0 feelings.');
