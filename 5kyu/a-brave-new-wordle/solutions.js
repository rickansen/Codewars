function resolver(guess, solution){
   guess = [...guess]
   solution = [...solution]

    for ( let i = 0; i < guess.length; i++) {
        if (guess[i] === solution[i]) {
            solution[i] = ''
            guess[i] = 1
        } 
    }

    for (let i = 0; i < guess.length; i++) {
        if (solution.includes(guess[i])) {
            solution[solution.indexOf(guess[i])] = ''
            guess[i] = 2
        }
    }

   return guess.map(x => x === 1 ? 'g' : x === 2 ? 'y' : 'b').join('')
}
