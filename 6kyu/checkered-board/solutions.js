function checkeredBoard(dimension) {
    let code = Array(dimension).fill(dimension % 2 === 0 ? 0 : 1).map( (x,y) => y % 2 !== 0 ? x === 0 ? 1 : 0 : x)
    let pattern1 = code.map(x => x === 1 ? "\u25A0" : "\u25A1")
    let pattern2 = code.map(x => x === 0 ? "\u25A0" : "\u25A1")

    return Array(dimension).fill(1).map( (x,y) => y === 0? pattern1 : pattern2).map(x => x.join(' ')).join('\n')
}
// even dark
// odd white
// \u25A0 black 
// \u25A1 white
console.log(
    checkeredBoard(2), "□ ■\n■ □", "Incorrect answer for n=2")
console.log(
    checkeredBoard(10),"□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □\n□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □\n□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □\n□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □\n□ ■ □ ■ □ ■ □ ■ □ ■\n■ □ ■ □ ■ □ ■ □ ■ □", "Incorrect answer for n=10")
console.log(
    checkeredBoard(3), "■ □ ■\n□ ■ □\n■ □ ■", "Incorrect answer for n=3")
console.log(
    checkeredBoard(7), "■ □ ■ □ ■ □ ■\n□ ■ □ ■ □ ■ □\n■ □ ■ □ ■ □ ■\n□ ■ □ ■ □ ■ □\n■ □ ■ □ ■ □ ■\n□ ■ □ ■ □ ■ □\n■ □ ■ □ ■ □ ■", "Incorrect answer for n=7")

    