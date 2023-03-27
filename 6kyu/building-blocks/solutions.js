class Block{

    constructor(x){
      this.width = x[0]
      this.length = x[1]
      this.height = x[2]
    }
    
    getWidth () {return this.width}
    getLength () {return this.length}
    getHeight () { return this.height}
    getVolume () {return this.width * this.length * this.height}
    getSurfaceArea () {return 2*(this.width * this.length + this.width * this.height + this.length * this.height)}
    
}


let block = new Block([2,4,6]);

console.log(block.getWidth(),  2)
console.log(block.getLength(), 4)
console.log(block.getHeight(), 6)
console.log(block.getVolume(), 48)
console.log(block.getSurfaceArea(), 88)

