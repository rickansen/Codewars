function addBinary(a,b) {

    let convert = a+b
    
    function convertToBinary1 (number) {
        let num = number;
        let binary = (num % 2).toString();
        for (; num > 1; ) {
            num = parseInt(num / 2);
            binary =  (num % 2) + (binary);
        }
        return binary
    }
    
    
    return convertToBinary1(convert)
    
    
}
    
console.log(addBinary(1,2))