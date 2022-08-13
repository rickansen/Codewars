const grabscrab = (anagram, dictionary) => dictionary.filter(x => [...x].sort().join('') === [...anagram].sort().join(''))
