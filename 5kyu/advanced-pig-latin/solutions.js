// Solution 1

function translate(sentence) {
	return sentence.split(' ').map(x => {
        if (/[^a-z]/i.test(x)) {
            let special = [...x].findIndex(a => /[^a-z]/i.test(a))
            let word = x.slice(0, special)
            special = x.slice(special)
            return pigLatinize(word) + special
        }
        return pigLatinize(x)
    }).join(' ')
};

function pigLatinize (word) {
    let vowelInd = [...word].findIndex(x => /[aeiou]/i.test(x))
    let suffix = vowelInd === 0 ? 'way' : 'ay'
    let translated = `${word.slice(vowelInd)}${word.slice(0, vowelInd)}${suffix}`
    if (word[0].toLowerCase() !== word[0]) return translated[0].toUpperCase() + translated.slice(1).toLowerCase()
    return translated
}

//Test Cases

console.log(translate('hello'), 'ellohay');
console.log(translate('hello world'), 'ellohay orldway');
console.log(translate('Hello World'), 'Ellohay Orldway');
console.log(translate('Pizza? Yes Please!!'), 'Izzapay? Esyay Easeplay!!');
console.log(translate('How are you?'), 'Owhay areway ouyay?');

console.log(pigLatinize('hello'), 'ellohay')
console.log(pigLatinize('Hello'), 'Ellohay')
console.log(pigLatinize('are'), 'areway')
console.log(pigLatinize('creating'), 'eatingcray')
console.log(pigLatinize('Algorithm'), 'Algorithmway')
console.log(pigLatinize('algorithm'), 'algorithmway')
