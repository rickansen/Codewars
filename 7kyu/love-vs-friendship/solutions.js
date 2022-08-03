const wordsToMarks = string => [...string].reduce((acc, character) => acc + character.charCodeAt() - 'a'.charCodeAt() + 1 , 0)


console.log(
    wordsToMarks("attitude"), 100);
console.log(
    wordsToMarks("friends"), 75);
console.log(
    wordsToMarks("family"), 66);
console.log(
    wordsToMarks("selfness"), 99);
console.log(
    wordsToMarks("knowledge"), 96);
