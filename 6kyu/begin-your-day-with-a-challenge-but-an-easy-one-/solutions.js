function oneTwoThree(n) {
    if (n === 0) return ['0', '0']
    let num = `${'9'.repeat(~~(n / 9))}${n%9 === 0? '' : n%9}`
    return [num, '1'.repeat(n)]
}
