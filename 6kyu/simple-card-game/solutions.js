function winner(deckSteve, deckJosh) {
    const deck = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
    deckSteve = deckSteve.map( x => deck.indexOf(x) )
    deckJosh = deckJosh.map( x => deck.indexOf(x) )
  
    const steveScore =  deckSteve.map((x,y) => x > deckJosh[y] ? 1 : 0).reduce((a,b) => a+b)
    const joshScore =  deckJosh.map((x,y) => x > deckSteve[y] ? 1 : 0).reduce((a,b) => a+b)
    const winner = steveScore !== joshScore ? steveScore > joshScore ? 'Steve' : 'Josh' : 'None'

    return winner !== 'None' ? `${winner} wins ${winner === 'Steve' ? steveScore : joshScore} to ${winner !== 'Steve' ? steveScore : joshScore}` : 'Tie'
}