String.prototype.isUpperCase = function() {
    return [...this].every(x => x.charCodeAt() < 91)
}