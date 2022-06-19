function isCoprime(x, y) {

    function gcd(a, b) {
        if (a == 0)
            return b;
        return gcd(b % a, a);
    }
    
    return gcd(x,y) === 1

}