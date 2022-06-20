function expandedForm(num) {
    let byOnes = num % 10
    let byTens = Math.floor(num / 10)
    let byHund = Math.floor(num / 100)
    let byThou = Math.floor(num / 1000)
    if (num < 10){
        return num
    } else if(num < 100){
        return byOnes !== 0 ? `${byTens*10} + ${byOnes}` : String(byTens*10)
    } else if(num < 1000) {

        if (num == 100){
            return String(num)
        } else if (String(num)[1] == 0){
            return `${byHund*100} + ${byOnes}`
        } else if (String(num)[2] == 0){
            return `${byHund*100} + ${num-(byHund*100)}`
        } else {
            return `${byHund*100} + ${num-(byHund*100)-byOnes} + ${byOnes}`
        }
    }  else if(num < 10000) {
        if (num == 1000){
            return String(num)
        } else if (String(num)[1] == 0 && String(num)[2] == 0){
            return `${byThou*1000} + ${byOnes}`
        } else if (String(num)[1] == 0 && String(num)[2] == 0){
            return `${byThou*1000} + ${Math.floor(num % 100)-byOnes} + ${byOnes}`
        } else if (String(num)[2] == 0 && String(num)[3] == 0){
            return `${byThou*1000} + ${(num % 1000) - byOnes}`
        }  else if (String(num)[1] == 0 && String(num)[3] == 0){
            return `${byThou*1000} + ${(num % 1000) - byOnes}`
        }  else if (String(num)[2] == 0){
            return `${byThou*1000} + ${(num % 1000) - byOnes} + ${byOnes}`
        } else if (String(num)[1] == 0){
            return `${byThou*1000} + ${(num % 1000) - byOnes} + ${byOnes}`
        } else if (String(num)[3] == 0){
            return `${byThou*1000} + ${(num % 1000) - (byTens /10)} + ${byOnes}`
        } 
    }
}
console.log(expandedForm(9110))