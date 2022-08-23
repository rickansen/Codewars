const nico = (key, message) => { 
    message = [...message + ' '.repeat(key.length * Math.ceil(message.length/key.length) - message.length)]
    let sort = [...key].sort()
    let arr = Array(message.length / key.length).fill('').map(x => message.splice(0,key.length))

    key = [...key].map(x => sort.indexOf(x) + 1)
    arr = [...arr.map(x => x.map((a,b)=> [a,key[b]]).sort((a,b) => a[1] - b[1]).map(a => a[0]).join('')).join('')]
    
    while (arr[arr.length - 1] === ' '){
        arr.pop()
    }

    return arr.join('')
} 