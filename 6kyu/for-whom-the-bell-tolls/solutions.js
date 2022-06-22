function bell(n) {
    let arr = Array(n % 2 === 0 ? n / 2 : Math.ceil(n / 2)).fill(n)
    let counter = n - 2

    arr = arr.map((x,y,z) => y !== 0 ? z[y+1] = (x + (counter - (2 * (y-1)))) : x)
    let slice = arr.slice().reverse()
    return n % 2 === 0 ? arr.concat(slice) : arr.concat(slice.slice(1))
}