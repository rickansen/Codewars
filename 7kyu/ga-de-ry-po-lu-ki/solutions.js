function encode(str) 
{
    return str.split('').map(x => 
      x === 'G' ? 'A'  : x === 'g' ? 'a' : x === 'A' ? 'G'  : x === 'a' ? 'g' 
    : x === 'D' ? 'E' : x === 'd' ? 'e' : x === 'E' ? 'D' : x === 'e' ? 'd' 
    : x === 'R' ? 'Y' : x === 'r' ? 'y'  : x === 'Y' ? 'R' : x === 'y' ? 'r' 
    : x === 'P' ? 'O'  : x === 'p' ? 'o' : x === 'O' ? 'P' : x === 'o' ? 'p' 
    : x === 'L' ? 'U' : x === 'l' ? 'u' : x === 'U' ? 'L' : x === 'u' ? 'l' 
    : x === 'K' ? 'I' : x === 'k' ? 'i' : x === 'I' ? 'K' : x === 'i' ? 'k' 
    : x  ).join('')

}

const decode = str => encode(str)

