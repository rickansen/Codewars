function Xbonacci(signature,n){
    let length = signature.length
  
    for (let i = 0; i < n - length; i++) {
      signature.push(signature.slice(i, i * length + length).reduce((a,b) => a+b))
    }
    return signature.slice(0, n)
}