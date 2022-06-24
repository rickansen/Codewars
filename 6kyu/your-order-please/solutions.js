const order = words => words.split(' ').map((x,y) => words.split(' ')[words.split(' ').findIndex(a => a.includes(y + 1))]).join(' ')
