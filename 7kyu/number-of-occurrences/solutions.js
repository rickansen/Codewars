Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
    value : function numberOfOccurrences(a) {
      return this.filter(x => x === a).length
    }
  });