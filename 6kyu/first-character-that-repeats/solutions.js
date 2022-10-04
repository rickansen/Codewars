const firstDup = (s) => [...s].find((x) => s.indexOf(x) !== s.lastIndexOf(x));
