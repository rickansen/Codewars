function slicesToName(n) {

    let word = ['bread','sandwich']
    if (n >= 2) {
        if (n % 2 === 0) {
            return word[1].concat((' ' + word[1]).repeat((n / 2) - 1))
        } else {
            return word[0].concat((' ' + word[1]).repeat( (n - 1) / 2) )
        }
    } else {
        return null
    }
  }
  
  function nameToSlices(name) {
    if (typeof name === 'string') {
        if (name) {
            let bread = name.split(' ').includes('bread')
            let sandwich = name.split(' ').includes('sandwich')
            if (bread) {
                if (name.split(' ').length > 1) {
                    return name.split(' ').filter(x => x === 'bread').length === 1 && name.split(' ')[0] === 'bread' ? name.split(' ').map(x => x === 'bread' ?1 : 2).reduce((a,b) => a + b, 0) : null
                } else {
                    return null
                }
            } else if (sandwich) {
                return name.split(' ').length * 2
            } else {
                return null
            }
        }
    } else {
        return null
    }

  }