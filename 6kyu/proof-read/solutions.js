const proofread = str => str.toLowerCase().replace(/(ie)/g, 'ei').split('. ').map(x => x[0].toUpperCase() + x.slice(1, x.length)).join('. ')


console.log( 
    proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT."), "Their deceit was inconceivable. She seized the moment."); 
console.log( 
    proofread("HIs nieghBOur wAs oVerwieGht."), "His neighbour was overweight."); 
console.log( 
    proofread("SHe rEcieveD a pIegNor."), "She received a peignor."); 
