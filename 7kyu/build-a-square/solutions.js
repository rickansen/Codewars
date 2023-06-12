const generateShape = integer => Array(integer).fill("+".repeat(integer)).join('\n')

console.log(generateShape(8), '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++' )