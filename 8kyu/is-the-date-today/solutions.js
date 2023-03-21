function isToday(date) {
    let today = new Date()
    return String(date).slice(0,16) === String(today).slice(0,16) 
}
const today = new Date();
let actualToday = isToday(today);
console.log(actualToday, true)



const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
console.log(isToday(tomorrow), false);


const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
console.log(isToday(yesterday), false);


console.log(actual, "You should return true or false. Did you print the answer instead?\n");
