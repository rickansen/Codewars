// Solution 1: Not readable lmaooooo
const frame = (text, char) => {
  let max = Math.max(...text.map((a) => a.length));
  return Array(text.length + 2)
    .fill(char)
    .map((x, y) =>
      y === 0 || y === text.length + 1
        ? char.repeat(max + 4)
        : `${char} ${text[y - 1]}${' '.repeat(
            max - text[y - 1].length
          )} ${char}`
    )
    .join('\n');
};

// Test Cases

console.log(
  frame(['Small', 'frame'], '~'),
  '~~~~~~~~~\n~ Small ~\n~ frame ~\n~~~~~~~~~'
);
console.log(
  frame(['Create', 'this', 'kata'], '+'),
  '++++++++++\n+ Create +\n+ this   +\n+ kata   +\n++++++++++'
);
console.log(
  frame(['This is a very long single frame'], '-'),
  '------------------------------------\n- This is a very long single frame -\n------------------------------------'
);
