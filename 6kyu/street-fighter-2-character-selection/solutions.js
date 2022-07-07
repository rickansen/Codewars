function streetFighterSelection(fighters, position, moves){

    if (!fighters || !position || fighters.length === 0 || !position.length === 0) return []
    let x = position[1], y = position[0], arr = []

    for (let i = 0; i < moves.length; i++) {
        moves[i] === 'up' ? arr.push([y - 1 < 0 ? 0 : y -= 1, x]) :
        moves[i] === 'down' ?arr.push([y + 1 > 1 ? 1 : y += 1, x]) :
        moves[i] === 'left' ? arr.push([y, x -= 1]) :
        arr.push([y, x += 1])
    }

    x = arr.map(el => el[1] < 0 ? el[1] % fighters[0].length + fighters[0].length : el[1]).map(el => el > fighters[0].length - 1 ? el % fighters[0].length : el)
    let final = arr.map((el,ind) => [el[0], x[ind]])

    return final.map((el,ind) => fighters[el[0]][el[1]])

}