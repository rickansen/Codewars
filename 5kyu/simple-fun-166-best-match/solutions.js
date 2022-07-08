function bestMatch(ALAHLYGoals, zamalekGoals) {
    let map = ALAHLYGoals.map((x,y) => x - zamalekGoals[y])

    return map.map(x => x === Math.min(...map))
              .filter(x => x === true).length === 1 
            ? map.indexOf(Math.min(...map)) 
            : map.map((x,y) => x === Math.min(...map) ? zamalekGoals[y] : '')
                 .findIndex((x,y,z) => x === Math.max(...z))
}