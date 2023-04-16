const removeDuplicateWords = s => Array(...new Set(s.split(' '))).join(' ')


console.log(
    removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');
