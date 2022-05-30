var beeramid = function(bonus, price) {
    let beerNum = bonus / price
    let counter = 0
    let result = 0

    if (bonus > price || bonus === price) {
        while (result < beerNum) {
            result += counter ** 2
            counter++

        }
        return result === beerNum ? counter - 1 : counter -2
    } else {
        return 0
    }
}