function twoSum(numbers, target) {
    return numbers.map((x,y,z) => [y, z.indexOf(target -x) == y ? -1 : z.indexOf(target -x)])
                  .filter(x => !x.includes(-1))[0]
}