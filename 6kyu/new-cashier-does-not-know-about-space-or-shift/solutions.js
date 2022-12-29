// Solution 1: long 
function getOrder(input) {
    let re = /(burger)|(fries)|(chicken)|(pizza)|(sandwich)|(onionrings)|(milkshake)|(coke)/
    let menu = [{'burger': 1},
    {'fries': 1},
    {'chicken': 1},
    {'pizza': 1},
    {'sandwich': 1},
    {'onionrings': 1},
    {'milkshake': 1},
    {'coke': 1}]
    
    while (input) {
        let order = input.match(re)[0]
        menu.find(x => x[order])[order]++
        input = input.replace(order, '')
    }

    return menu.map(x => Object.entries(x)[0]).map(x => x.map((a,b) => b === 1 ? a -1 : a)).filter(x => x[1]).map(x => Array(x[1]).fill(x[0]) ).reduce((a,b) => a.concat(b)).map(x => x[0].toUpperCase() + x.slice(1)).join(' ')
}

// Test Cases
console.log(
    getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"),
"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
console.log(
    getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"),
"Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");