String.prototype.trim = function() {
    let thisDupe = [...this]
    while (/[^a-zA-Z0-9]/.test(thisDupe[0])) {
        thisDupe.shift()
    }
    while (/[^a-zA-Z0-9]/.test(thisDupe[thisDupe.length - 1])) {
        thisDupe.pop()
    }
    return thisDupe
   
};


console.log("foo      ".trim(), "foo", "trailing spaces");
console.log("      foo".trim(), "foo", "leading spaces");
console.log("      foo      ".trim(), "foo", "leading and trailing spaces");
console.log("foo    bar".trim(), "foo    bar", "spaces in between");
console.log("    ".trim(), "", "only spaces");