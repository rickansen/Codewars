function pathFinder(maze){
    maze = maze.split("\n").map(cell => [...cell])

    let N = maze.length
    const visitedNodes = new Set()
    let queue = [[0, 0]]

    while (queue.length !== 0) {
      const [row, col] = queue.shift() // visit maze[row][col]
      if (row === N-1 && col === N-1) { // win check
          return true
      }
      let neighbors = getValidNeighbours(row, col)
      queue = queue.concat(neighbors) // add neighbors to visit next
    }
    
    function getValidNeighbours(row, col) {
        return [[row+1, col], [row, col +1], [row-1, col], [row, col-1]].filter(([row, col]) => {
            return inBounds(row, col) && !isWall(row, col) && !visited(row, col)
        })  
    }
    
    function inBounds (row, col) {
        return row >= 0 && row <= N-1 && col >=0 && col <= N-1
    }

    function isWall(row, col) {
        return maze[row][col] === "W"
    }

    function visited(row, col) {
        const key = `${row},${col}`
        if (visitedNodes.has(key)) return true;
        visitedNodes.add(key);
        return false;
    }
    return false;
}