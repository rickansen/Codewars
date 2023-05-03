function tapCodeTranslation(text) {
    let dict = {
        A: '11',
        B: '12',
        C: '13',
        D: '14',
        E: '15',
        F: '21',
        G: '22',
        H: '23',
        I: '24',
        J: '25',
        K: '13',
        L: '31',
        M: '32',
        N: '33',
        O: '34',
        P: '35',
        Q: '41',
        R: '42',
        S: '43',
        T: '44',
        U: '45',
        V: '51',
        W: '52',
        X: '53',
        Y: '54',
        Z: '55'
    }
    
    return text.toUpperCase().split('').map(x => dict[x].split('').map(a => '.'.repeat(a)).join(' ')).join(' ')
}

//         1  2  3  4  5
//      1  A  B C\K D  E
//      2  F  G  H  I  J
//      3  L  M  N  O  P
//      4  Q  R  S  T  U
//      5  V  W  X  Y  Z
console.log(
    tapCodeTranslation("test"), ".... .... . ..... .... ... .... ....");
console.log(
    tapCodeTranslation("total"), ".... .... ... .... .... .... . . ... .");
console.log(
    tapCodeTranslation("break"), ". .. .... .. . ..... . . . ...");
console.log(
    tapCodeTranslation("something"), ".... ... ... .... ... .. . ..... .... .... .. ... .. .... ... ... .. ..");
console.log(
    tapCodeTranslation("final"), ".. . .. .... ... ... . . ... .");

