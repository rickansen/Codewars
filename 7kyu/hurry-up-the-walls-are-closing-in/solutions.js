// Solution 1
function canEscape(walls) {

    for (let i = 0; i < walls.length; i++) {

        walls.map(x => {
            x[0]--
            x[1]--
        })

        let place = walls[i]
        
        if (place.findIndex(x => x < 1) !== -1) return false

    }

    return true
}

// Test Case
console.log( canEscape([[7, 7], [7, 7], [7, 7], [7, 7]]), true);
console.log( canEscape([[2, 2], [3, 3], [4, 4]]), true);
console.log( canEscape([[2, 8], [7, 3], [6, 4]]), true);
console.log( canEscape([[2, 2], [3, 3], [3, 4]]), false);
console.log( canEscape([[3, 3], [1, 1], [3, 3]]), false);
console.log( canEscape([[7, 7], [0, 0], [7, 7]]), false);
