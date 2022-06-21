function hexStringToRGB(hexString) {
    let hex = hexString.toLowerCase().slice(1)
    let arr = [hex.slice(0,2),hex.slice(2,4), hex.slice(4,6)].map(x=> parseInt(x, 16))

    return {r: arr[0], g: arr[1], b: arr[2]}
}