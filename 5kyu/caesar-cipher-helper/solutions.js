class CaesarCipher {
    constructor(shift){
        this.shift = shift
        this.regex = new RegExp(/[a-z]/i)
    }

    encode (str){
        return [...str.toLowerCase()].map(x => {
            if (this.regex.test(x)) {
                let code = ((x.charCodeAt() - 96 + this.shift) % 26)
                return  String.fromCharCode(code !== 0 ? code + 96 : 26 + 96)
            } else {
                return x
            }})
            .join('').toUpperCase()
    }


    decode (str){
        return [...str.toLowerCase()].map(x => {
            if (this.regex.test(x)) {
                let code = (((x.charCodeAt() - 96) - this.shift + 26) % 26) 
                return String.fromCharCode( code !== 0 ? code + 96 : 26 + 96)
            } else {
                return x
            }   
        })
        .join('').toUpperCase()
    }


}

