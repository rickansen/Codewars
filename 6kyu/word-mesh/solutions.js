// Solution 1

function wordMesh(arr){
    let mesh =  arr.map( (x,y) =>  {
        if (y !== arr.length - 1) {
            let slice = [...arr[y]].map( (a,b) => a === arr[y+1][0] ? b : '').filter(a => a !== '').map(a => [a, x.slice(a), arr[y+1].indexOf(x.slice(a)) === 0] ).filter(a => a[2] === true).map(a => a[1])
            return slice.length !== 0 ? slice[0] : false
        }
       return ''
    })

    return mesh.includes(false) ? 'failed to mesh' : mesh.join('')
}

// Test Cases
console.log(
    wordMesh(["beacon","condominium","umbilical","california"]), "conumcal");
console.log(
    wordMesh(["allow","lowering","ringmaster","terror"]), "lowringter");
console.log(
    wordMesh(["abandon","donation","onion","ongoing"]), "dononon");
console.log(
    wordMesh(["jamestown","ownership","hippocampus","pushcart","cartographer","pheromone"]), "ownhippuscartpher"	);    
console.log(
    wordMesh(["kingdom", "dominator", "notorious", "usual", "allegory"]), "failed to mesh");
console.log(
    wordMesh([
        'california',
        'niagara',
        'arachnophobia',
        'biannual',
        'alumni',
        'nibbles',
        'blessing'
      ]), 'niaarabiaalnibles');
      console.log(
        wordMesh([
            'victoria',
            'iambic',
            'icicle',
            'clearview',
            'rearviewpoint',
            'ointment',
            'entrance'
          ]), 'fail');
    