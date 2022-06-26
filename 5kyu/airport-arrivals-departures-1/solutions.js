var flapDisplay = function(lines, rotors) {
    const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ','?','!','@','#','&','(',   ')','|','<','>','.',':','=','-','+','*','/','0','1','2','3','4','5','6','7','8','9'].join('')
    return [lines.join('').split('').map((x,y) => (ALPHABET.indexOf(x) + rotors[0].slice(0, y + 1).reduce((a,b) => a + b)) % ALPHABET.length).map(x => ALPHABET[x]).join('')]
    //lines.map((x,y) => x.split('').map((x,y) => ALPHABET.indexOf(x) + rotors))
    //
}

console.log(flapDisplay([["CAT"]], [[1,13,27]]
))

// var before = BEFORE(["CAT"])
// var rotors = [[1,13,27]]

// +---------------------------+
// | THIS IS A MULTI LINE TEST |
// +---------------------------+

// [ [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53 ],
// [ 8,46,7,12,30,1,4,16,34,52,32,13,11,48,3,14,4,24,16,13,3,47,22,26,50,13,52,47,8 ],
// [ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53 ] ]
