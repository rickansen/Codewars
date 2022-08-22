const deNico = (key, m) => { 
    m = [...m + ' '.repeat(key.length * Math.ceil(m.length/key.length) - m.length)]
    let sort = [...key].sort()
    let arr = Array(m.length / key.length).fill('').map(x => m.splice(0,key.length))

    key = [...key].map(x => sort.indexOf(x) + 1)
    arr = [...arr.map(x => key.map((a,b) => x[a-1]).join('')).join('')]

    while (arr[arr.length - 1] === ' '){
        arr.pop()
    }

    return arr.join('')
} 
