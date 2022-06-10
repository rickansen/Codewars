function solution(input, markers) {
    let split = input.split('\n')
    let arr = []
    let arr2 = []

    for (let i = 0; i < split.length; i++) {
        for (let x = 0; x < markers.length; x++) {
            arr.push(split[i].includes(markers[x]))
        }
    }

    for (let i = 0; i< arr.length / markers.length; i++) {
        arr2.push(arr.slice(i * markers.length, i * markers.length + markers.length))
    }

    arr2 = arr2.map((x,y) => x.indexOf(true))

    return split.map((x,y) => x.includes(markers[arr2[y]]) 
    ? x.slice(0, x.indexOf(markers[arr2[y]])).trim() : x.trim()).join('\n')
};