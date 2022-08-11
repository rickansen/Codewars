function isbnConverter(isbn) {
    let num = `978-` + isbn.slice(0, isbn.length -1)
    let check = [...num].filter(x => x !== '-').map((x,y) => y % 2 === 0 ? +x * 1 : +x * 3).reduce((a,b) => a+ b)
    return `${num}${check % 10 === 0? 0 : 10 - check % 10}`
}
