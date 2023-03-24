function alphabetWar(fight) {
    let score = ['sbpw', 'zdqm'].map((x,y)=> [...x].map((a,b) => [...fight].filter(e => e === a).length * (b+1) ).reduce((a,b) => a + b))
    return score[0] > score[1] ? "Left side wins!" : score[1] > score[0] ? "Right side wins!" : "Let's fight again!" 
}

console.log( alphabetWar("z") , "Right side wins!" );
console.log( alphabetWar("zdqmwpbs") , "Let's fight again!" );
console.log( alphabetWar("zzzzs"), "Right side wins!" );
console.log( alphabetWar("wwwwww"), "Left side wins!" );