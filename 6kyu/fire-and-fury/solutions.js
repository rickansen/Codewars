// Solution 1: bit long ewww
var fireAndFury = function(tweet) {
    let arr = []
    let arr2 = [], temp = 0
    if ( !tweet.match(/(FIRE)|(FURY)/) || !!tweet.match(/[^EFIRUY]/)) return 'Fake Tweet.'
    while (tweet.includes('FIRE') || tweet.includes('FURY') ) {
        if (tweet.match(/(FIRE)|(FURY)/)[0] === 'FIRE') {
            tweet = tweet.replace('FIRE', 1)
            arr.push('FIRE')
            continue;
        }
        tweet = tweet.replace('FURY', 1)
        arr.push('FURY')
    }

    for (let i = 0; i < arr.length; i++) {
        
        if (i === 0) {
            arr2.push([arr[i], 1])
            temp++
            continue;
        }

        if (arr2[temp - 1][0] === arr[i]) {
            arr2[temp - 1][1]++

            continue
        }

        arr2.push([arr[i], 1])
        temp++
    }
    
    return arr2.map(x => {
        if (x[0] === 'FURY') {
            return x[1] === 1 ? 'I am furious.' : `I am ${'really '.repeat(x[1] - 1)}furious.`
        }
        return x[1] === 1 ? "You are fired!" : `${'you and '.repeat(x[1] - 1)}you are fired!`
    }).map(x => x[0].toUpperCase().concat(x.slice(1))).join(' ')
}
 
  
// Test Cases
console.log(fireAndFury("FURYYYFIREYYFIRE"), "I am furious. You and you are fired!");
console.log(fireAndFury("AAAAAAAFIRE"), "Fake tweet.");

console.log(fireAndFury("FIREYYFURYYFURYYFURRYFIRE"), "You are fired! I am really furious. You are fired!");

console.log(fireAndFury("FYRYFIRUFIRUFURE"), "Fake tweet.");
