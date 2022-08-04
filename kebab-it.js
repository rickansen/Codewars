function convert (title) {
    let regex = new RegExp(/[^a-z\d]/g)
    let dirName = title.toLowerCase().replaceAll(regex, '-')

    while (dirName.includes('--')) {
       dirName = dirName.replace('--', '-')
    }
    return dirName
}

console.log(convert())