function mazeRunner(maze, directions) {
  let currentRow = null;
  let currentCol = null;
  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[0].length; col++) {
      if (maze[row][col] === 2) {
        currentRow = row;
        currentCol = col;
      }
    }
  }
  const dObject = {
    N: [-1, 0],
    E: [0, 1],
    S: [1, 0],
    W: [0, -1],
  };

  for (let direction of directions) {
    currentRow += dObject[direction][0];
    currentCol += dObject[direction][1];

    const rowOutOfBounds = currentRow < 0 || currentRow >= maze.length;
    const colOutOfBounds = currentCol < 0 || currentCol >= maze[0].length;

    if (rowOutOfBounds || colOutOfBounds || maze[currentRow][currentCol] === 1)
      return 'Dead';
    if (maze[currentRow][currentCol] === 3) return 'Finish';
  }

  return 'Lost';
}
