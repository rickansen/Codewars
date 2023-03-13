function getBestWord(points,words){
    let dict = words.map(x => [x.length, [...x].map(a => points[[a.charCodeAt() - 65]]).reduce((a,b) => a + b) ])
    let max =  Math.max(...dict.map(x => x[1]))
    let min =  Math.min(...dict.filter(x => x[1] === max).map(x => x[0]))
    return dict.findIndex(x => x[0] === min && x[1] === max)
}

var points = [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10];
var simpleWords = ["WHO","IS","THE","BEST","OF","US"];
var rndmWords = ["NOQ","TXAY","S","OM","ESFT","CJUKQ","QL","QO","ASTK","Y"];
var firstBestWord = ["JGPCWVWFW","JXHNKBJJG"];

console.log(
    getBestWord(points,simpleWords),0);
console.log(
    getBestWord(points,rndmWords),5);
console.log(
    getBestWord(points,firstBestWord),0);