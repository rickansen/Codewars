function makeAWindow(num) {
    let edge =  `${'-'.repeat(num * 2 + 3)}`
    let pane = `|${'.'.repeat(num)}|${'.'.repeat(num)}|\n`
    let mid = `|${'-'.repeat(num)}+${'-'.repeat(num)}|\n`
    return `${edge}\n`.concat(pane.repeat(num)).concat(mid).concat(pane.repeat(num)).concat(edge)
}