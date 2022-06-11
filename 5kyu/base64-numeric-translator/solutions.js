function base64toBase10(base64) {
    let base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('')
    let map = String(base64)
                .split('')
                .map(x => base.indexOf(x))
                .reverse()
    
    if (base64.length === 1) {
        return base.indexOf(base64)
    } else {
        let add = map[0]
        return map.map((x,y) => x * (64 ** y))
          .reduce((a,b) => a + b, 0)
    }

}