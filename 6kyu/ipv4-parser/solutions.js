function ipv4Parser(ip, mask){
    
    mask = mask.split('.')
    ip = ip.split('.')

    let netBlock = ip.map( (x,y) => +x & mask[y] )
    let hostId = ip.map( (x,y) => +x - +netBlock[y] ).join('.')

    return [netBlock.join('.'), hostId]
}