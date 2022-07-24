function x(n){
    const solid = '■', hollow = '□'
    const middle = Array(n).fill(0).map((x,y) => y !== (n-1) / 2 ? hollow : solid).join('')
    const half = Array((n-1) / 2)
                .fill(0)
                .map((x,y) => Array((n-1)/2)
                    .fill(0)
                    .map((a,b) =>  y === b ? solid : hollow)
                    )
                .map(x => `${x}${hollow}${x.reverse()}`.split(',').join(''))
                
                
    return half.concat(middle).concat(half.reverse()).join('\n')
}