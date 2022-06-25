function findTheNotFittingElement(series){
    let type = series.map(x => typeof x)
    let all = type.every(x => x === 'number') || type.every(x => x === 'string')  ||  type.every(x => x === 'boolean') || type.every(x => x === 'object') || type.every(x => Array.isArray(x))
    let charReg = new RegExp(/[A-Z]/)
    let charReg2 = new RegExp(/[a-z]/i)
    if (all) {
        let check = series.map(x => series.indexOf(x) === series.lastIndexOf(x))
        let specType = type[0]
        if (check.every(x => x === true)) {
            if (specType === 'number') {
                if (series.filter(x => x % 2 === 0).length === 1 || series.filter(x => x % 2 !== 0).length === 1) {
                    let oddOrEven = series.map(x => x % 2 === 0)
                    return series[oddOrEven.map(x => oddOrEven.indexOf(x) == oddOrEven.lastIndexOf(x)).indexOf(true)]
                } else if (series.map( x => x > 0).filter(x => x === true).length === 1 || series.map( x => x > 0).filter(x => x === false).length === 1) {
                    let sign = series.map(x => x > 0)
                    return series[sign.map( x => sign.indexOf(x) === sign.lastIndexOf(x)).indexOf(true)]
                }  
            } else if (specType === 'string') {
                if (series.map(x => charReg.test(x)).filter(x => x === true).length === 1 || series.map(x => !charReg.test(x)).filter(x => x === true).length === 1 ) {
                    let caseChar = series.map(x => charReg.test(x))
                    return series[caseChar.map(x => caseChar.indexOf(x) == caseChar.lastIndexOf(x)).indexOf(true)]
                } else {
                    if (series.map(x => charReg2.test(x)).filter(x => x === true).      length === 1 ||series.map(x => !charReg2.test(x)).filter(x => x === true).length === 1) {
                        let charAll = series.map(x => charReg2.test(x))
                        return series[charAll.map(x => charAll.indexOf(x) == charAll.lastIndexOf(x)).indexOf(true)]
                    }
                }           
            }
        } else {
            let bool = series.map(x => x > 0)
            if (check.filter(x => x === true).length === 1) {
                return series[series.map(x => series.indexOf(x) === series.lastIndexOf(x)).indexOf(true)]
            } else if (check.filter(x => x === true).length > 1) {
                if (series.map( x => x > 0).filter(x => x === true).length === 1 || series.map( x => x > 0).filter(x => x === false).length === 1) {
                    let sign = series.map(x => x > 0)
                    return series[sign.map( x => sign.indexOf(x) === sign.lastIndexOf(x)).indexOf(true)]
                } else if (series.map(x => charReg.test(x)).filter(x => x === true).length === 1 || series.map(x => !charReg.test(x)).filter(x => x === true).length === 1 ) {
                    let caseChar = series.map(x => charReg.test(x))
                    return series[caseChar.map(x => caseChar.indexOf(x) == caseChar.lastIndexOf(x)).indexOf(true)]
                }    
            }  
        }
    } else {
        let typeMap = series.map(x => typeof x)
        return series[typeMap.map(x => typeMap.indexOf(x) === typeMap.lastIndexOf(x)).indexOf(true)]
    }
}