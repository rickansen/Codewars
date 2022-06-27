var flapDisplay = function(lines, rotors) {

    let newarr=[]
    
    for (let i=0; i<lines.length; i++){
      let line=lines[i].split("").map(x => ALPHABET.indexOf(x)) // Your code here!
      line = line.map((x,y) => (x + rotors[i].slice(0,y+1).reduce((a,b) => a + b, 0)) % ALPHABET.length).map(x => ALPHABET[x]);
      newarr.push( line.join(""))
    }
    
    return newarr
  }