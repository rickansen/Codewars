function sumConsecutives(s) {
    let arr = [s[0]]
 
    for (let i = 1; i < s.length; i++) {   
    
        if (s[i-1] === s[i]) {
            arr[arr.length -1]+= s[i]
        } else {
            arr.push(s[i])
        }

    }

    return arr
}

console.log(
    sumConsecutives([1,4,4,4,0,4,3,3,1]),[1,12,0,4,6,1], "on list [1,4,4,0,4,3,3,1] you get ")
console.log(
    sumConsecutives([1,1,7,7,3]),[2,14,3], "on list [1,1,7,7,3] you get ")
console.log(
    sumConsecutives([-5,-5,7,7,12,0]),[-10,14,12,0], "on list [-5,-5,7,7,12,0] you get ")
console.log(
    sumConsecutives([3,3,3,3,1]),[12, 1], "on list [3,3,3,3,1] you get " )
