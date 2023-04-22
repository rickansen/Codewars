const spacey = array => array.map((x,y,z) => z.slice(0,y+1).join(''))


console.log(
    spacey(['kevin', 'has','no','space']), [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);
console.log(
    spacey(['this','cheese','has','no','holes']), ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']);
