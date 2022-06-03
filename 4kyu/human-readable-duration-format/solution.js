function formatDuration (seconds) {
    let arr = [31536000, 86400, 3600, 60, 1]
    let arr1 = ['year', 'day', 'hour', 'minute', 'second']
    let arr2 = [[ Math.floor(seconds / arr[0]) , seconds % arr[0]]]
    
    for (let i = 0; i < 4; i++) {
        arr2.push( [ Math.floor(arr2[i][1] / arr[i + 1]), seconds % arr[i + 1] ] )
    }

    arr2 = arr2.map((x,y) => [x[0], x[0] > 1 ? `${arr1[y]}s` : arr1[y]])
                .filter(x => x[0] >= 1).map(x => `${x[0]} ${x[1]}`)
    
    if (seconds === 0){
        return 'now'
    } else if (arr2.length > 1) {
        return `${arr2.slice(0, arr2.length - 1).join(', ')} and ${arr2[arr2.length -1]}`
    } else {
        return arr2[0]
    }
}